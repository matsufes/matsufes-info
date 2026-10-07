import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 6",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msleaffe1" />
      <section className="el-5">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"scroll-to\",\"target\":\"matsufes\"}]}]"}
          src="/assets/svg-4"
          alt=""
          width={213}
          height={213}
          className="el-102"
        />
        <div className="el-6">
          <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"menu1\"}]}]"} className="el-7">
            <Image
              src="/assets/pasted-artwork-36.svg"
              alt=""
              width={244}
              height={55}
              className="svg"
            />
          </p>
          <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"menu2\"}]}]"} className="el-9">
            <Image
              src="/assets/pasted-artwork-37.svg"
              alt=""
              width={153}
              height={55}
              className="svg-2"
            />
          </p>
          <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"menu3\"}]}]"} className="el-54">
            <Image
              src="/assets/pasted-artwork-38.svg"
              alt=""
              width={93}
              height={61}
              className="svg-4"
            />
          </p>
          <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"menu4\"}]}]"} className="el-8">
            <Image
              src="/assets/pasted-artwork-39.svg"
              alt=""
              width={127}
              height={58}
              className="svg-3"
            />
          </p>
        </div>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-141">
          <Image
            src="/assets/pasted-artwork-203.svg"
            alt=""
            width={42}
            height={23}
            className="svg-183"
          />
        </div>
      </section>
      <section className="el-118">
        <div data-inview className="el-123">
          <Image
            src="/assets/svg"
            alt=""
            width={1920}
            height={1312}
            className="svg-112"
          />
        </div>
        <div data-inview className="el-119">
          <Image
            src="/assets/IMG_3053.PNG"
            alt=""
            width={2480}
            height={3508}
            className="img-3053-png"
          />
        </div>
        <div className="el-120">
          <Image
            src="/assets/56-.svg"
            alt=""
            width={267}
            height={150}
            className="el-121"
          />
        </div>
        <div className="el-122">
          <Image
            src="/assets/svg-5"
            alt=""
            width={677}
            height={352}
            className="svg-111"
          />
        </div>
      </section>
      <section className="el-10">
        <div className="el-124">
          <Image
            src="/assets/pasted-artwork-65.svg"
            alt=""
            width={674}
            height={215}
            className="pasted-artwork-svg-30"
          />
        </div>
      </section>
      <section className="box-79">
        <Link href="/map" className="el-125">
          <Image
            src="/assets/pasted-artwork-139.svg"
            alt=""
            width={172}
            height={454}
            className="svg-113"
          />
        </Link>
        <Link href="/keyword" className="el-126">
          <Image
            src="/assets/pasted-artwork-140.svg"
            alt=""
            width={371}
            height={461}
            className="svg-114"
          />
        </Link>
        <Link href="/timetable-13" className="el-127">
          <Image
            src="/assets/pasted-artwork-141.svg"
            alt=""
            width={239}
            height={400}
            className="svg-115"
          />
        </Link>
      </section>
      <section id="menu3" data-toggle-show="flex" data-inview className="el-20">
        <Link href="/attention" className="el-21">
          {"ご来場の皆さまへ"}
        </Link>
        <Link href="/access" className="el-22">
          {"行き方・会場地図"}
        </Link>
        <Link href="/survey" className="el-23">
          {"来場者アンケ〜ト"}
        </Link>
        <Link href="/question" className="el-24">
          {"よくあるご質問"}
        </Link>
      </section>
      <section id="menu1" data-toggle-show="flex" data-inview className="el-11">
        <Link href="/about" className="el-12">
          {"松ヶ崎祭とは"}
        </Link>
        <Link href="/theme" className="mf56">
          {"mf56メインテ〜マ"}
        </Link>
        <Link href="/support" className="el-13">
          {"ご協賛いただいた皆さま"}
        </Link>
        <Link href="/notice" className="el-14">
          {"お知らせ"}
        </Link>
      </section>
      <section id="menu2" data-toggle-show="flex" data-inview className="el-15">
        <Link href="/keyword" className="el-16">
          {"言葉からさがす"}
        </Link>
        <Link href="/timetable-13" className="el-17">
          {"日程表からさがす"}
        </Link>
        <Link href="/map" className="el-18">
          {"地図からさがす"}
        </Link>
        <Link href="/mypage-favorite" className="el-19">
          {"きみのしおり"}
        </Link>
      </section>
      <section id="menu4" data-toggle-show="flex" data-inview className="el-25">
        <Link href="/committee" className="el-26">
          {"委員会企画"}
        </Link>
        <Link href="/m-1" className="m-1">
          {"m-1グランプリ"}
        </Link>
        <Link href="/comingsoon" className="el-27">
          {"公式メンバ〜「まつぴよ」"}
        </Link>
      </section>
      <section className="el-28">
        <div className="el-128">
          <Image
            src="/assets/pasted-artwork-66.svg"
            alt=""
            width={674}
            height={212}
            className="pasted-artwork-svg-31"
          />
        </div>
      </section>
      <section className="el-56">
        <Link href="/access" className="el-98">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={1051}
            height={732}
            className="svg-92"
          />
        </Link>
        <Link href="/attention" className="el-99">
          <Image
            src="/assets/pasted-artwork-67.svg"
            alt=""
            width={1122}
            height={862}
            className="pasted-artwork-svg-13"
          />
        </Link>
        <Link href="/comingsoon" className="el-100">
          <Image
            src="/assets/pasted-artwork-68.svg"
            alt=""
            width={999}
            height={815}
            className="pasted-artwork-svg-14"
          />
        </Link>
        <Link href="/question" className="el-101">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={1112}
            height={769}
            className="svg-93"
          />
        </Link>
      </section>
      <section className="box-133">
        <Image
          src="/assets/pasted-artwork-202.svg"
          alt=""
          width={1248}
          height={195}
          className="svg-182"
        />
      </section>
      <section className="el-58">
        <div className="el-129">
          <Image
            src="/assets/pasted-artwork-69.svg"
            alt=""
            width={674}
            height={152}
            className="pasted-artwork-svg-32"
          />
        </div>
      </section>
      <section className="el-57">
        <div className="box-26">
          <Image data-inview
            src="/assets/svg-2"
            alt=""
            width={738}
            height={565}
            className="svg-116"
          />
        </div>
        <div className="box-27">
          <Image
            src="/assets/svg-3"
            alt=""
            width={929}
            height={438}
            className="svg-117"
          />
        </div>
      </section>
      <section className="footer-2">
        <Image
          src="/assets/pasted-artwork-70.svg"
          alt=""
          width={1920}
          height={1015}
          className="pasted-artwork-svg-42"
        />
        <a href="https://www.instagram.com/kit_matsufes/" className="el-152">
          <Image
            src="/assets/pasted-artwork-208.svg"
            alt=""
            width={58}
            height={58}
            className="svg-188"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x">
          <Image
            src="/assets/pasted-artwork-209.svg"
            alt=""
            width={54}
            height={49}
            className="svg-189"
          />
        </a>
      </section>
      <section id="memu-p" data-toggle-show="flex" className="el-142">
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-143">
          <Image
            src="/assets/pasted-artwork-204.svg"
            alt=""
            width={43}
            height={31}
            className="svg-184"
          />
        </div>
        <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-144">
          {"松ヶ崎祭について"}
        </p>
        <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-145">
          {"企画さがし"}
        </p>
        <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-146">
          {"ご案内"}
        </p>
        <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-147">
          {"公式特集"}
        </p>
        <div id="mf-phone" data-toggle-show="flex" className="el-148">
          <Link href="/about" id="松ヶ崎祭とは-p" className="button-3">
            {"松ヶ崎祭とは"}
          </Link>
          <Link href="/theme" id="mf56-p" className="button-4">
            {"mf56メインテ〜マ"}
          </Link>
          <Link href="/support" id="協賛-p" className="button-5">
            {"協賛いただいた皆さま"}
          </Link>
          <Link href="/notice" id="お知らせ-p" className="button-6">
            {"お知らせ"}
          </Link>
        </div>
        <div id="kikaku-phone" data-toggle-show="flex" className="el-149">
          <Link href="/keyword" id="言葉-p" className="button-7">
            {"言葉からさがす"}
          </Link>
          <Link href="/timetable-13" id="日程表-p" className="button-8">
            {"日程表からさがす"}
          </Link>
          <Link href="/map" id="地図-p" className="button-9">
            {"地図からさがす"}
          </Link>
          <Link href="/mypage-favorite" id="しおり-p" className="button-10">
            {"きみのしおり\n"}
          </Link>
        </div>
        <div id="goannai-phone" data-toggle-show="flex" className="el-150">
          <Link href="/attention" id="ご来場の-p" className="button-11">
            {"ご来場の皆さまへ"}
          </Link>
          <Link href="/access" id="行き方-p" className="button-12">
            {"行き方・会場地図"}
          </Link>
          <Link href="/survey" id="アンケ〜ト-p" className="button-13">
            {"来場者アンケ〜ト"}
          </Link>
          <Link href="/question" id="ご質問-p" className="button-14">
            {"よくあるご質問"}
          </Link>
        </div>
        <div id="koushiki-phone" data-toggle-show="flex" className="el-151">
          <Link href="/committee" id="委員会企画-p" className="button-15">
            {"委員会企画"}
          </Link>
          <Link href="/m-1" id="m-1-p" className="button-16">
            {"m-1グランプリ"}
          </Link>
          <Link href="/comingsoon" id="まつぴよ-p" className="button-17">
            {"公式メンバー「まつぴよ」"}
          </Link>
        </div>
      </section>
    </>
  );
}
