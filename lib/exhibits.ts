export const EXHIBITS_URL = "https://api.matsufes.info/data/web-info.json";

export type Exhibit = {
  exhibitKey: string;
  publicId: number;
  exhibitNo: string;
  name: string;
  groupName: string;
  exhibitorName: string;
  businessHours: string[];
  customAnswers: Record<string, string>;
  type: string;
  categories: Record<string, string[]>;
  description: string;
  tags: string[];
  snsX: string;
  snsInstagram: string;
  snsWeb: string;
  imageUrl: string;
  place: string;
  venue: string;
  updatedAt: string;
};

/** 会場マップと同じデータ。研究紹介・委員会企画など web-info.json に載らない企画も含む */
export const MAP_URL = "https://api.matsufes.info/data/map.json";

type MapExhibit = {
  recordId: string;
  publicId: number;
  id?: string;
  name: string;
  group?: string;
  exhibitorName?: string;
  categoryValues?: Record<string, string[]>;
  description?: string;
  image?: string | null;
  sns?: { x?: string; instagram?: string; web?: string };
  businessHours?: { date: string; open: boolean; opensAt: string; closesAt: string; text?: string }[];
  customAnswers?: Record<string, string>;
  place?: string;
  venue?: string;
  searchWords?: string;
};

type MapData = {
  exhibits?: MapExhibit[];
  categoryGroups?: { id: string; name: string }[];
  webInfoForm?: { fieldLabels?: Record<string, string> };
};

async function fetchJson<T>(url: string): Promise<T | undefined> {
  try {
    const res = await fetch(url, { cache: "no-store" });
    return res.ok ? await res.json() : undefined;
  } catch {
    return undefined;
  }
}

function splitWords(s: string | undefined): string[] {
  return (s ?? "").split(/[,、]/).map((w) => w.trim()).filter(Boolean);
}

/** map.json の企画を web-info.json と同じ形に変換する */
function fromMap(m: MapExhibit, map: MapData): Exhibit {
  const groupName = (id: string) => map.categoryGroups?.find((g) => g.id === id)?.name ?? id;
  const labels = map.webInfoForm?.fieldLabels ?? {};
  const categories = Object.fromEntries(
    Object.entries(m.categoryValues ?? {}).map(([id, v]) => [groupName(id), v])
  );
  const customAnswers = Object.fromEntries(
    Object.entries(m.customAnswers ?? {}).map(([id, v]) => [labels[id] ?? id, v])
  );
  const businessHours = (m.businessHours ?? []).flatMap((h) => {
    if (h.text) return [h.text];
    const d = h.date.match(/^\d{4}-(\d{2})-(\d{2})$/);
    if (!h.open || !d) return [];
    return [`${Number(d[1])}/${Number(d[2])} ${h.opensAt}-${h.closesAt}`];
  });
  return {
    exhibitKey: m.recordId,
    publicId: m.publicId,
    exhibitNo: m.id ?? "",
    name: m.name,
    groupName: m.group ?? "",
    exhibitorName: m.exhibitorName ?? "",
    businessHours,
    customAnswers,
    type: (categories["出展カテゴリ"] ?? []).join("・"),
    categories,
    description: m.description ?? "",
    tags: splitWords(m.searchWords),
    snsX: m.sns?.x ?? "",
    snsInstagram: m.sns?.instagram ?? "",
    snsWeb: m.sns?.web ?? "",
    imageUrl: m.image ?? "",
    place: m.place ?? "",
    venue: m.venue ?? "",
    updatedAt: "",
  };
}

/**
 * 全出展を publicId 順で取得する（失敗時は空配列）。
 * web-info.json を基本に、map.json にしかない企画（研究紹介・委員会企画など）を補い、
 * map.json の検索ワードも検索対象に加える。
 */
export async function fetchExhibits(): Promise<Exhibit[]> {
  const [web, map] = await Promise.all([
    fetchJson<{ data?: Exhibit[] }>(EXHIBITS_URL),
    fetchJson<MapData>(MAP_URL),
  ]);
  const data: Exhibit[] = Array.isArray(web?.data) ? web.data : [];
  const mapExhibits = map && Array.isArray(map.exhibits) ? map.exhibits : [];
  const byId = new Map(mapExhibits.map((m) => [m.publicId, m]));
  for (const e of data) {
    e.tags = [...(e.tags ?? []), ...splitWords(byId.get(e.publicId)?.searchWords)];
    byId.delete(e.publicId);
  }
  for (const m of byId.values()) data.push(fromMap(m, map!));
  return data.sort((a, b) => a.publicId - b.publicId);
}

export async function fetchExhibit(slug: string): Promise<Exhibit | undefined> {
  const all = await fetchExhibits();
  return all.find((e) => String(e.publicId) === slug);
}

export function exhibitHref(e: Pick<Exhibit, "publicId">): string {
  return `/search/${e.publicId}`;
}

const WEEKDAY: Record<string, string> = { "11/13": "金", "11/14": "土", "11/15": "日" };

/** "11/14 10:00-20:30" → "11/14(土) 10:00〜20:30"。形式外の文字はそのまま返す */
export function formatHours(hours: string[]): string[] {
  return hours.map((h) => {
    const m = h.match(/^(\d{1,2}\/\d{1,2})\s+(.*)$/);
    if (!m) return h;
    const day = WEEKDAY[m[1]];
    return `${m[1]}${day ? `(${day})` : ""} ${m[2].replace(/-/g, "〜")}`;
  });
}

/** 営業時間に含まれる日付（"11/13" など）。"2026-11-14" 形式の記載にも対応 */
export function exhibitDays(e: Exhibit): string[] {
  const text = e.businessHours.join(" ");
  return Object.keys(WEEKDAY).filter((d) => {
    const [mo, da] = d.split("/");
    return text.includes(d) || text.includes(`2026-${mo}-${da}`);
  });
}

export function placeText(e: Exhibit): string {
  if (e.exhibitNo) return e.exhibitNo;
  return [e.venue, e.place].filter(Boolean).join(" ");
}

export type Spot = "屋内" | "屋外" | "ステージ";

/** 出展場所の区分。番号だけの venue は屋外テント */
export function exhibitSpots(e: Exhibit): Spot[] {
  const spots: Spot[] = [];
  if (e.type.includes("パフォーマンス") || e.venue === "メインステージ") spots.push("ステージ");
  if (/^\d+$/.test(e.venue) || e.venue === "メインステージ" || e.venue === "ストリートパフォーマンス" || e.venue === "門衛所") {
    spots.push("屋外");
  } else if (e.venue) {
    spots.push("屋内");
  }
  return spots;
}

/** 全角半角・大文字小文字・カタカナひらがなの違いを無視して比べるための正規化 */
export function normalize(s: string): string {
  return s
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

/** 会場マップでこの企画を選んだ状態で開くURL（id = publicId） */
export function mapHref(e: Pick<Exhibit, "publicId">): string {
  return `https://map.matsufes.info/?id=${e.publicId}&zoom=18.17`;
}
