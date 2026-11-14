export function safeNavigationUrl(value: string): string {
  var url = value.trim();
  var beforeQuery = url.split(/[?#]/, 1)[0];
  if (!url || /[\u0000-\u001f\u007f\\]/.test(beforeQuery) || url.indexOf("//") === 0) return "#";
  var match = /^([a-z][a-z0-9+.-]*):/i.exec(url);
  var scheme = match && match[1].toLowerCase();
  if (scheme && ["http", "https", "mailto", "tel"].indexOf(scheme) < 0) return "#";
  if ((scheme === "http" || scheme === "https") && !/^https?:\/\//i.test(url)) return "#";
  return url;
}

const TOKEN_RE = /\\\{|\{([^{}\s"'<>`]+)\}|\[slug\]/g;
/** 文字としての「{」の書き方 */
const ESCAPED_BRACE = "\\{";
/** vars にこのキーがあれば「\{」を残す（ブラウザでもう一度置き換える文字を作るとき） */
const KEEP_ESCAPES = "\u0000keepEscapes";

export type Vars = Record<string, unknown>;

/**
 * 変数の値を取り出す。"images.0" や "meta.createdAt" のように
 * 「.」で配列の何番目・入れ子の項目をたどれる（配列の "-1" は最後の要素）
 */
export function lookupVar(vars: Vars, name: string): unknown {
  const owns = (value: object, key: string | number) =>
    Object.prototype.hasOwnProperty.call(value, key);
  if (owns(vars, name)) return vars[name];
  let cur: unknown = vars;
  for (const key of name.split(".")) {
    if (cur == null || typeof cur !== "object") return undefined;
    const part = Array.isArray(cur) && key === "-1" ? cur.length - 1 : key;
    if (!owns(cur, part)) return undefined;
    cur = (cur as Record<string | number, unknown>)[part];
  }
  return cur;
}

/** 表示用の文字にする（配列は「, 」でつなぐ） */
const formatValueText: (value: unknown, comparison?: boolean) => string = (function n(e,t=!1){if(null==e)return"";if(!Array.isArray(e))return"object"==typeof e?t?"[object Object]":"":String(e);let r=[],i=[{value:e,index:0}],o=new WeakSet([e]),a=0,s=0;for(;i.length;){if(++a>5242880)return"";let e=i[i.length-1];if(e.index>=e.value.length){o.delete(e.value),i.pop();continue}t&&e.index>0&&(r.push(","),s++);let n=e.value[e.index++];if(Array.isArray(n))o.has(n)||(o.add(n),i.push({value:n,index:0}));else{let e=null==n?"":"object"==typeof n?t?"[object Object]":"":String(n);e&&(!t&&r.length&&(r.push(", "),s+=2),r.push(e),s+=e.length)}if(s>5242880)return""}return r.join("")});
export function varText(v: unknown): string { return formatValueText(v); }

/** "{name}" と "[slug]" を値に置き換える（未定義は空文字。「\{」は文字の「{」） */
export function interpolate(template: string, vars: Vars): string {
  return template.replace(TOKEN_RE, (m, name) => {
    if (m === ESCAPED_BRACE) return vars[KEEP_ESCAPES] ? m : "{";
    return varText(lookupVar(vars, name ?? "slug"));
  });
}

/** URL用の置換（値をencodeURIComponent。先頭の変数がURLそのもの（https:// や / で始まる）ならそのまま使う） */
export function interpolateUrl(template: string, vars: Vars): string {
  return template.replace(TOKEN_RE, (m, name, at: number) => {
    if (m === ESCAPED_BRACE) return vars[KEEP_ESCAPES] ? m : "{";
    const v = varText(lookupVar(vars, name ?? "slug"));
    return at === 0 && isWholeUrl(v) ? v : encodeURIComponent(v);
  });
}

/** 値がURLそのものか（リンク先の先頭に置いた変数をエンコードせずに使う。// や data:text/html などは除く） */
function isWholeUrl(v: string): boolean {
  return (
    /^(?:https?:|mailto:|tel:|data:image\/(?:png|jpe?g|gif|webp|avif|bmp|x-icon|vnd\.microsoft\.icon)[;,])/i.test(v) ||
    (v.charAt(0) === "/" && v.charAt(1) !== "/") ||
    v.charAt(0) === "#"
  );
}

/** JSON の本文用の置換（文字列の中は JSON 用にエスケープ、外は値そのものの JSON） */
export function interpolateJson(template: string, vars: Vars): string {
  let out = "";
  let inString = false;
  let last = 0;
  TOKEN_RE.lastIndex = 0;
  for (const m of template.matchAll(TOKEN_RE)) {
    const at = m.index ?? 0;
    const chunk = template.slice(last, at);
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] === "\\") i++;
      else if (chunk[i] === '"') inString = !inString;
    }
    out += chunk;
    last = at + m[0].length;
    if (m[0] === ESCAPED_BRACE) {
      if (inString) {
        // A valid JSON string writes an escaped backslash as "\\\\". The
        // token matcher consumes its final slash, leaving an invalid "\\{"
        // escape unless its paired slash is removed as well.
        let trailingSlashes = 0;
        while (trailingSlashes < chunk.length &&
          chunk[chunk.length - trailingSlashes - 1] === "\\") trailingSlashes++;
        if (trailingSlashes % 2 === 1) out = out.slice(0, -1);
      }
      out += "{";
      continue;
    }
    const v = lookupVar(vars, m[1] ?? "slug");
    out += inString ? JSON.stringify(varText(v)).slice(1, -1) : JSON.stringify(v === undefined ? null : v);
  }
  return out + template.slice(last);
}
