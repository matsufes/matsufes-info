import Link from "next/link";

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mslbenpoz" />
      <section className="el-3">
        <h1 className="el-4">
          {"404"}
        </h1>
        <p className="text-9">
          {"お探しのページは見つかりませんでした。"}
        </p>
        <Link href="/" className="button-2">
          {"ホームへ戻る"}
        </Link>
      </section>
    </>
  );
}
