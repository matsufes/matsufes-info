const TOKEN_RE = /\{([^{}\s"'<>`]+)\}|\[slug\]/g;

export type Vars = Record<string, unknown>;

/**
 * 変数の値を取り出す。"images.0" や "meta.createdAt" のように
 * 「.」で配列の何番目・入れ子の項目をたどれる
 */
export function lookupVar(vars: Vars, name: string): unknown {
  if (name in vars) return vars[name];
  let cur: unknown = vars;
  for (const key of name.split(".")) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[key];
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

/** "{name}" と "[slug]" を値に置き換える（未定義は空文字） */
export function interpolate(template: string, vars: Vars): string {
  return template.replace(TOKEN_RE, (_m, name) => {
    return varText(lookupVar(vars, name ?? "slug"));
  });
}

/** URL用の置換（値をencodeURIComponent） */
export function interpolateUrl(template: string, vars: Vars): string {
  return template.replace(TOKEN_RE, (_m, name) => {
    return encodeURIComponent(varText(lookupVar(vars, name ?? "slug")));
  });
}
