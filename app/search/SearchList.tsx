"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { normalize } from "@/lib/exhibits";

export type SearchItem = {
  href: string;
  exhibitorName: string;
  groupName: string;
  imageUrl: string;
  message: string;
  place: string;
  voteCategory: string;
  middleCategory: string;
  type: string;
  days: string[];
  spots: string[];
  bigCategories: string[];
  /** normalize() 済みの検索対象テキスト */
  text: string;
};

type Filters = { day: string | null; spot: string | null; big: string | null };
const NO_FILTERS: Filters = { day: null, spot: null, big: null };

const DAYS = [
  { value: "11/13", src: "/assets/pasted-artwork-5.svg", w: 137, className: "el-34" },
  { value: "11/14", src: "/assets/pasted-artwork-6.svg", w: 137, className: "el-35" },
  { value: "11/15", src: "/assets/pasted-artwork-7.svg", w: 137, className: "el-36" },
];
const SPOTS = [
  { value: "屋内", src: "/assets/pasted-artwork-9.svg", w: 137, className: "el-38" },
  { value: "屋外", src: "/assets/pasted-artwork-8.svg", w: 137, className: "el-37" },
  { value: "ステージ", src: "/assets/pasted-artwork-10.svg", w: 137, className: "el-39" },
];
const BIG_ROW1 = [
  { value: "たべる", src: "/assets/pasted-artwork-11.svg", w: 138, className: "el-40" },
  { value: "のむ", src: "/assets/pasted-artwork-12.svg", w: 137, className: "el-41" },
  { value: "かう", src: "/assets/pasted-artwork-13.svg", w: 137, className: "el-42" },
  { value: "つくる", src: "/assets/pasted-artwork-14.svg", w: 137, className: "el-43" },
];
const BIG_ROW2 = [
  { value: "あそぶ", src: "/assets/pasted-artwork-15.svg", w: 138, className: "el-44" },
  { value: "みる", src: "/assets/pasted-artwork-16.svg", w: 138, className: "el-45" },
  { value: "さわる", src: "/assets/pasted-artwork-17.svg", w: 137, className: "el-46" },
  { value: "きく", src: "/assets/pasted-artwork-18.svg", w: 137, className: "el-47" },
];

function matches(item: SearchItem, words: string[], f: Filters): boolean {
  if (!words.every((w) => item.text.includes(w))) return false;
  if (f.day && !item.days.includes(f.day)) return false;
  if (f.spot && !item.spots.includes(f.spot)) return false;
  if (f.big && !item.bigCategories.includes(f.big)) return false;
  return true;
}

export default function SearchList({ items, initialQuery }: { items: SearchItem[]; initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<Filters>(NO_FILTERS);

  const visible = useMemo(() => {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    return items.filter((item) => matches(item, words, filters));
  }, [items, query, filters]);

  const toggle = (key: keyof Filters, value: string) =>
    setFilters((f) => ({ ...f, [key]: f[key] === value ? null : value }));

  const option = (key: keyof Filters, o: { value: string; src: string; w: number; className: string }) => {
    const selected = filters[key] === o.value;
    const style: CSSProperties = {
      cursor: "pointer",
      transform: selected ? "scale(1.1)" : undefined,
      transition: "transform .2s",
    };
    return (
      <Image
        key={o.value}
        src={selected ? o.src.replace(/\.svg$/, "-on.svg") : o.src}
        alt={o.value}
        width={o.w}
        height={49}
        className={o.className}
        style={style}
        role="button"
        tabIndex={0}
        aria-pressed={selected}
        onClick={() => toggle(key, o.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle(key, o.value);
          }
        }}
      />
    );
  };

  const reset = () => {
    setQuery("");
    setFilters(NO_FILTERS);
  };

  return (
    <>
      <section className="box-215">
        <input
          id="field"
          type="text"
          className="input-2"
          name="field"
          placeholder="ここに　言葉を　入力してみてね"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>
      <section className="box-233">
        <div className="box-232">
          <div className="el-31">
            <div className="box-5">
              <Image src="/assets/pasted-artwork-2.svg" alt="" width={150} height={150} className="image-2" />
            </div>
            <p className="box-4">{"  いつ？"}</p>
          </div>
          <div className="el-29">{DAYS.map((o) => option("day", o))}</div>
          <div className="el-56">
            <div className="box-43">
              <Image src="/assets/pasted-artwork-3.svg" alt="" width={158} height={150} className="pasted-artwork-svg-6" />
            </div>
            <p className="box-44">{"どこで？"}</p>
          </div>
          <div className="el-32">{SPOTS.map((o) => option("spot", o))}</div>
          <div className="el-57">
            <div className="box-45">
              <Image src="/assets/pasted-artwork-4.svg" alt="" width={120} height={150} className="pasted-artwork-svg-7" />
            </div>
            <p className="box-46">{"  どんなことがしたい？"}</p>
          </div>
          <div className="el-33">
            <div className="box-6">{BIG_ROW1.map((o) => option("big", o))}</div>
            <div className="box-7">{BIG_ROW2.map((o) => option("big", o))}</div>
          </div>
          <div className="box-8">
            <Image
              src="/assets/pasted-artwork-23.svg"
              alt="やりなおす"
              width={179}
              height={49}
              className="el-48"
              style={{ cursor: "pointer" }}
              role="button"
              tabIndex={0}
              onClick={reset}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  reset();
                }
              }}
            />
          </div>
          <div className="box-132">
            <Link href="/m-1" className="crisp-svg svg-144">
              <svg aria-hidden="true" width={343} height={178} viewBox="0 0 343 178" />
              <Image src="/assets/pasted-artwork-191.svg" alt="m-1グランプリ" width={686} height={356} />
            </Link>
          </div>
        </div>
        <div className="box-234">
          <div className="icon-3">
            {visible.map((item) => (
              <Link key={item.href} href={item.href} style={{ display: "contents", color: "inherit", textDecoration: "none" }}>
                <div className="icon">
                  <span className="crisp-svg el-139">
                    <svg aria-hidden="true" width={429} height={280} viewBox="0 0 429 280" />
                    <Image src="/assets/pasted-artwork-202.svg" alt="" width={858} height={560} />
                  </span>
                  <p className="box-157">{item.exhibitorName}</p>
                  <p className="box-158">{item.groupName}</p>
                  <Image
                    src={item.imageUrl || "data:image/gif;base64,R0lGODlhAQABAAAAACw="}
                    alt=""
                    width={1024}
                    height={1024}
                    className="svg-150"
                  />
                  <Image src="/assets/pasted-artwork-212.svg" alt="" width={15} height={15} className="svg-154" />
                  <Image src="/assets/pasted-artwork-213.svg" alt="" width={13} height={20} className="svg-155" />
                  <p className="box-160">{item.message}</p>
                  <p className="box-161">{item.place}</p>
                  <Image src="/assets/pasted-artwork-216.svg" alt="" width={35} height={34} className="svg-156" />
                  <Image src="/assets/pasted-artwork-227.svg" alt="" width={533} height={16} className="svg-157" />
                  {item.voteCategory && <p className="box-164">{item.voteCategory}</p>}
                  <p className="box-165">{item.middleCategory}</p>
                  <p className="box-166">{item.type}</p>
                </div>
              </Link>
            ))}
            {visible.length === 0 && (
              <p className="el-170" style={{ width: "100%" }}>
                {"見つからなかったよ。\nほかの言葉でさがしてみてね。"}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
