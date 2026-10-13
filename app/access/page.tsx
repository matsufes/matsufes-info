import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf53mtd6j" />
      <section className="el-479">
        <div className="el-480">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-481">
            <span
              className="crisp-svg pasted-artwork-svg-49"
              style={{ aspectRatio: "230 / 142" }}
            >
              <Image
                src="/assets/pasted-artwork-247.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-482">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-483">
              <span
                className="crisp-svg svg-210"
                style={{ aspectRatio: "43 / 31" }}
              >
                <Image
                  src="/assets/pasted-artwork-171.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-484">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-485">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-486">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-487">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-488">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-137">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-138">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-139">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-140">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-489">
              <Link href="/keyword" id="言葉-p" className="button-141">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-142">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-143">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-144">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-490">
              <Link href="/attention" id="ご来場の-p" className="button-145">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-146">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-147">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-148">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-491">
              <Link href="/committee" id="委員会企画-p" className="button-149">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-150">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-151">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-492"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-493">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-494">
              <span
                className="crisp-svg svg-211"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-495">
                <Link href="/about" className="el-496">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-10">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-497">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-498">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-499">
              <span
                className="crisp-svg svg-212"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-500">
                <Link href="/keyword" className="el-501">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-502">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-503">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-504">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-505">
              <span
                className="crisp-svg svg-213"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-506">
                <Link href="/attention" className="el-507">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-508">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-509">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-510">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-511">
              <span
                className="crisp-svg svg-214"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-512">
                <Link href="/committee" className="el-513">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-12">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-514">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="el-515"
        />
      </section>
      <p className="box-47">
        <span
          className="crisp-svg svg-58"
          style={{ aspectRatio: "854 / 131" }}
        >
          <Image
            src="/assets/pasted-artwork-95.svg"
            alt=""
            width={1708}
            height={262}
          />
        </span>
      </p>
      <section className="box-48">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-15"
        />
      </section>
      <section className="box-49">
        <span
          className="crisp-svg pasted-artwork-svg-30"
          style={{ aspectRatio: "510 / 109" }}
        >
          <Image
            src="/assets/pasted-artwork-118.svg"
            alt=""
            width={1020}
            height={218}
          />
        </span>
      </section>
      <section className="box-183">
        <p className="box-184">
          {"・地下鉄烏丸線　松ヶ崎駅　8分\n\n・叡山電車　一乗寺駅　11分\n\n・叡山電車　修学院駅　14分"}
        </p>
      </section>
      <section className="box-84">
        <span
          className="crisp-svg svg-82"
          style={{ aspectRatio: "510 / 101" }}
        >
          <Image
            src="/assets/pasted-artwork-119.svg"
            alt=""
            width={1020}
            height={202}
          />
        </span>
      </section>
      <section className="box-185">
        <p className="box-186">
          {"・市バス65号系統など　左京区総合庁舎・京都工芸繊維大学前　1分\n\n\n・京都バス17・43号系統など　高野泉町　4分\n\n\n・市バス松ヶ崎4号系統など　左京区総合庁舎前　5分\n\n\n・市バス北8・65号系統など　松ヶ崎海尻町　7分\n\n\n・市バス206・204号系統など　高木町　8分"}
        </p>
      </section>
      <section className="box-85">
        <span
          className="crisp-svg svg-83"
          style={{ aspectRatio: "298 / 106" }}
        >
          <Image
            src="/assets/pasted-artwork-120.svg"
            alt=""
            width={596}
            height={212}
          />
        </span>
      </section>
      <section className="box-86">
        <p className="box-87">
          {"ご来場の際は、公共交通機関をご利用ください。 \n\n\n自家用車・タクシー・バイク・自転車・キックボードなどでの入構はご遠慮いただいております。\n\n\n自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n\n構内の自転車走行は禁止されています。"}
        </p>
      </section>
      <section className="box-50">
        <span
          className="crisp-svg svg-59"
          style={{ aspectRatio: "1089 / 710" }}
        >
          <Image
            src="/assets/pasted-artwork-96.svg"
            alt=""
            width={2178}
            height={1420}
          />
        </span>
      </section>
      <section className="box-51" />
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-7"
      />
    </>
  );
}
