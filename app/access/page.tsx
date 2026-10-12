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
      <section className="el-483">
        <div className="el-484">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-485">
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={230}
              height={142}
              className="pasted-artwork-svg-49"
            />
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-486">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-487">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-212"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-488">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-489">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-490">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-491">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-492">
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
            <div id="kikaku-phone" data-toggle-show="flex" className="el-493">
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
            <div id="goannai-phone" data-toggle-show="flex" className="el-494">
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
            <div id="koushiki-phone" data-toggle-show="flex" className="el-495">
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
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={213}
            height={213}
            className="el-496"
          />
          <div className="el-497">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-498">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-213"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-499">
                <Link href="/about" className="el-500">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-10">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-501">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-502">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-503">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-214"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-504">
                <Link href="/keyword" className="el-505">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-506">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-507">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-508">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-509">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-215"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-510">
                <Link href="/attention" className="el-511">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-512">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-513">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-514">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-515">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-216"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-516">
                <Link href="/committee" className="el-517">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-12">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-518">
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
          className="el-519"
        />
      </section>
      <p className="box-47">
        <Image
          src="/assets/pasted-artwork-95.svg"
          alt=""
          width={854}
          height={131}
          className="svg-58"
        />
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
        <Image
          src="/assets/pasted-artwork-118.svg"
          alt=""
          width={510}
          height={109}
          className="pasted-artwork-svg-30"
        />
      </section>
      <section className="box-184">
        <p className="box-185">
          {"・地下鉄烏丸線　松ヶ崎駅　8分\n\n・叡山電車　一乗寺駅　11分\n\n・叡山電車　修学院駅　14分"}
        </p>
      </section>
      <section className="box-84">
        <Image
          src="/assets/pasted-artwork-119.svg"
          alt=""
          width={510}
          height={101}
          className="svg-82"
        />
      </section>
      <section className="box-186">
        <p className="box-187">
          {"・市バス65号系統など　左京区総合庁舎・京都工芸繊維大学前　1分\n\n\n・京都バス17・43号系統など　高野泉町　4分\n\n\n・市バス松ヶ崎4号系統など　左京区総合庁舎前　5分\n\n\n・市バス北8・65号系統など　松ヶ崎海尻町　7分\n\n\n・市バス206・204号系統など　高木町　8分"}
        </p>
      </section>
      <section className="box-85">
        <Image
          src="/assets/pasted-artwork-120.svg"
          alt=""
          width={298}
          height={106}
          className="svg-83"
        />
      </section>
      <section className="box-86">
        <p className="box-87">
          {"ご来場の際は、公共交通機関をご利用ください。 \n\n\n自家用車・タクシー・バイク・自転車・キックボードなどでの入構はご遠慮いただいております。\n\n\n自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n\n構内の自転車走行は禁止されています。"}
        </p>
      </section>
      <section className="box-50">
        <Image
          src="/assets/pasted-artwork-96.svg"
          alt=""
          width={1089}
          height={710}
          className="svg-59"
        />
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
