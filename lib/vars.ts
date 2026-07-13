const TOKEN_RE = /\{([A-Za-z0-9_.-]+)\}|\[slug\]/g;

export type Vars = Record<string, unknown>;

/** "{name}" と "[slug]" を値に置き換える（未定義は空文字） */
export function interpolate(template: string, vars: Vars): string {
  return template.replace(TOKEN_RE, (_m, name) => {
    const v = vars[name ?? "slug"];
    return v == null ? "" : String(v);
  });
}

/** URL用の置換（値をencodeURIComponent） */
export function interpolateUrl(template: string, vars: Vars): string {
  return template.replace(TOKEN_RE, (_m, name) => {
    const v = vars[name ?? "slug"];
    return v == null ? "" : encodeURIComponent(String(v));
  });
}
