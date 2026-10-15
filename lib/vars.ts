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
  if (name in vars) return vars[name];
  let cur: unknown = vars;
  for (const key of name.split(".")) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = Array.isArray(cur) && key === "-1" ? cur[cur.length - 1] : (cur as Record<string, unknown>)[key];
  }
  return cur;
}

/** 表示用の文字にする（配列は「, 」でつなぐ） */
export function varText(v: unknown): string {
  if (v == null) return "";
  if (Array.isArray(v)) return v.map(varText).filter(Boolean).join(", ");
  if (typeof v === "object") return "";
  return String(v);
}

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

/** 値がURLそのものか（リンク先の先頭に置いた変数をエンコードせずに使う） */
function isWholeUrl(v: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(v) || v.charAt(0) === "/" || v.charAt(0) === "#";
}
