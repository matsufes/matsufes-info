import type { Metadata } from "next";
import SearchForm from "@/components/SearchForm";

export const metadata: Metadata = {
  title: "商品一覧",
  description: "dummyjson.comのデータで動くサンプルページ",
};

export default function Page() {
  return (
    <>
      <section className="el-20">
        <h1 className="el-12">
          {"商品カタログ"}
        </h1>
        <p className="text-10">
          {"dummyjson.com のデータで動く一覧・検索・詳細ページのサンプルです。"}
        </p>
        <SearchForm className="el-14">
          <input id="q" type="text" className="input" name="q" placeholder="商品を検索…" />
          <button type="submit" className="el-13">
            {"検索"}
          </button>
        </SearchForm>

      </section>
    </>
  );
}
