import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "松ヶ崎祭について",
  description: "松ヶ崎祭とは？ 松ヶ崎祭についてご紹介します。",
  openGraph: {
    title: "松ヶ崎祭について",
    description: "松ヶ崎祭とは？ 松ヶ崎祭についてご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6dx2a7y" />
      <section className="el-823">
        <div className="el-824">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-825">
            <span
              className="crisp-svg pasted-artwork-svg-63"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-223.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-826">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-827">
              <span
                className="crisp-svg svg-269"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-160.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-828">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-829">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-830">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-831">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-832">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-284">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-285">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-286">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-287">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-833">
              <Link href="/search" id="言葉-p" className="button-288">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-289">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-290">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-291">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-834">
              <Link href="/attention" id="ご来場の-p" className="button-292">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-293">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-294">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-295">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-296">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-835">
              <Link href="/committee" id="委員会企画-p" className="button-297">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-298">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-299">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-836"
          />
          <div className="el-837">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-838" data-p="">
              <span
                className="crisp-svg svg-270"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-839">
                <Link href="/about" className="el-840">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-19">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-841">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-842">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-843" data-p="">
              <span
                className="crisp-svg svg-271"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-844">
                <Link href="/search" className="el-845">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-846">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-847">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-848">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-849" data-p="">
              <span
                className="crisp-svg svg-272"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-850">
                <Link href="/attention" className="el-851">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-852">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-853">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-854">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-855">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-856" data-p="">
              <span
                className="crisp-svg svg-273"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-857">
                <Link href="/committee" className="el-858">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-22">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-859">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-860"
        />
      </section>
      <p className="box-59">
        <span
          className="crisp-svg svg-208"
        >
          <svg aria-hidden="true" width={636} height={130} viewBox="0 0 636 130" />
          <Image
            src="/assets/pasted-artwork-237.svg"
            alt=""
            width={1272}
            height={260}
          />
        </span>
      </p>
      <section className="box-60">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-19"
        />
      </section>
      <section className="box-61">
        <span
          className="crisp-svg svg-78"
        >
          <svg aria-hidden="true" width={438} height={114} viewBox="0 0 438 114" />
          <Image
            src="/assets/pasted-artwork-111.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="box-72">
        <p className="box-87">
          {"松ヶ崎祭は2026年で56回目を迎えたよ。\n\n\n毎年 11 月に松ヶ崎キャンパスで開催されている京都工芸繊維大学の学園祭。\n\n様々な団体が日々の活動成果を発表する場になっているよ。"}
        </p>
      </section>
      <section className="el-119">
        <span
          className="crisp-svg svg-130"
        >
          <svg aria-hidden="true" width={438} height={114} viewBox="0 0 438 114" />
          <Image
            src="/assets/pasted-artwork-161.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="el-164">
        <p className="box-162">
          {"本日は第56回松ヶ崎祭にご来場いただきありがとうございます。\n\n松ヶ崎祭実行委員会を代表しまして心より歓迎申し上げます。\n\nまた、松ヶ崎祭の開催にあたり、日頃より多大なるご支援・ご協力を賜りました、\nすべての関係者の皆さまに、深く御礼申し上げます。\n\n今年度の松ヶ崎祭開催に向けて、出展者さまが安心して当日を迎えられるよう、\nそして松ヶ崎祭が無事に開催できるよう、準備に注力してきました。\n\n私たちが準備してきた過程は注目されにくいものがほとんどです。しかし、その成果として、構内の至る所に、私たちが無我夢中で創り上げた景色が広がっています。\n\n今年度の松ヶ崎祭のテーマは「夢宙」です。\n\n私たち松ヶ崎祭実行委員会は「松ヶ崎祭という無限の夢が宙がる空間での時間に思わず熱中してしまうような最高の体験を、出展者の皆さま、そして来場される皆さまに届けたい」という一心で、松ヶ崎祭が終わる最後の時まで駆け抜けます。"}
        </p>
      </section>
      <section className="el-85">
        <div className="box-174">
          <Image
            src="/assets/pasted-artwork-98.svg"
            alt=""
            width={1091}
            height={856}
            className="pasted-artwork-svg-39"
          />
          <a href="https://mf55.matsufes.info/" className="el-167">
            {"第55回松ヶ崎祭　「カイカセンゲン」"}
          </a>
          <a href="https://mf54.matsufes.info/" className="el-168">
            {"第54回松ヶ崎祭　「みちみち」"}
          </a>
          <a href="https://mf53.matsufes.info/" className="hello-world">
            {"第53回松ヶ崎祭　「Hello, world.」"}
          </a>
          <a href="https://mf52.matsufes.info/" className="re-kit">
            {"第52回松ヶ崎祭　「Re:kit」"}
          </a>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-10"
      />
    </>
  );
}
