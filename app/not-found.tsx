import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="el-2">
        <h1 className="el-3">
          {"404"}
        </h1>
        <p className="text-6">
          {"お探しのページは見つかりませんでした。"}
        </p>
        <Link href="/" className="button-2">
          {"ホームへ戻る"}
        </Link>
      </section>
    </>
  );
}
