import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muiixvz340" />
      <section className="el-446">
        <div className="el-447">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-448">
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={230}
              height={142}
              className="pasted-artwork-svg-48"
            />
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-449">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-450">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-207"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-451">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-452">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-453">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-454">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-455">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-122">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-123">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-124">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-125">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-456">
              <Link href="/keyword" id="言葉-p" className="button-126">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-127">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-128">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-129">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-457">
              <Link href="/attention" id="ご来場の-p" className="button-130">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-131">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-132">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-133">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-458">
              <Link href="/committee" id="委員会企画-p" className="button-134">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-135">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-136">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={213}
            height={213}
            className="el-459"
          />
          <div className="el-460">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-461">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-208"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-462">
                <Link href="/about" className="el-463">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-9">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-464">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-465">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-466">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-209"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-467">
                <Link href="/keyword" className="el-468">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-469">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-470">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-471">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-472">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-210"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-473">
                <Link href="/attention" className="el-474">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-475">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-476">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-477">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-478">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-211"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-479">
                <Link href="/committee" className="el-480">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-11">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-481">
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
          className="el-482"
        />
      </section>
      <p className="box-76">
        <Image
          src="/assets/pasted-artwork-94.svg"
          alt=""
          width={845}
          height={130}
          className="pasted-artwork-svg-28"
        />
      </p>
      <section className="box-77">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-29"
        />
      </section>
      <section className="box-78">
        <Image
          src="/assets/pasted-artwork-116.svg"
          alt=""
          width={749}
          height={114}
          className="svg-80"
        />
      </section>
      <section className="box-79">
        <p className="box-80">
          {"◇ ご来場の際は、公共交通機関をご利用ください。\n\n◇ 車・バイクでのご来場はご遠慮ください。\n\n◇ 自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n構内の自転車走行は禁止されています。\n\n◇ ペット(補助犬を除く)の同伴はご遠慮ください。\n\n◇ 酒類の持ち込みおよび飲酒は禁止されています。また、泥酔状態でのご来場もご遠慮ください。\n\n◇ 構内は喫煙所を除き、全面禁煙です。周辺道路での喫煙もご遠慮ください。\n\n◇ 当委員会から認められていない勧誘・宣伝・販売行為は禁止されています。\n\n◇ 企画を実施していない建物や講義室、工事区域内への立ち入りはご遠慮ください。\n\n◇ ゴミの分別にご協力ください。"}
        </p>
      </section>
      <section className="box-81">
        <Image
          src="/assets/pasted-artwork-117.svg"
          alt=""
          width={438}
          height={114}
          className="svg-81"
        />
      </section>
      <section className="box-82">
        <p className="box-83">
          {"◇ 落とし物をしたり、発見した場合は本部までお越しください。\n\n◇ 迷子を見つけた場合、お連れの方が迷子になった場合は本部までお越しください。\n\n◇ 急病人を発見した場合は、お近くの実行委員までお知らせください。\n\n◇ 怪我や体調が優れない場合は、本部または保健管理センターまでお越しください。 "}
        </p>
      </section>
      <section className="box-129">
        <Image
          src="/assets/pasted-artwork-178.svg"
          alt=""
          width={438}
          height={114}
          className="svg-142"
        />
      </section>
      <section className="box-134">
        <p className="box-135">
          {"開催日程順に掲載しています。"}
        </p>
      </section>
      <section className="box-130">
        <Image
          src="/assets/pasted-artwork-240.svg"
          alt=""
          width={577}
          height={181}
          className="svg-166"
        />
        <div className="box-131">
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://trias.link/2026/\"}]}]"}
            src="/assets/pasted-artwork-179.svg"
            alt=""
            width={406}
            height={191}
            className="el-127"
          />
        </div>
      </section>
      <section className="box-136">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/akv65Tn4vQnYoEfP8?g_st=ic\"}]}]"}
          src="/assets/pasted-artwork-192.svg"
          alt=""
          width={326}
          height={66}
          className="google1"
        />
      </section>
      <section className="box-137">
        <Image
          src="/assets/pasted-artwork-239.svg"
          alt=""
          width={625}
          height={181}
          className="svg-165"
        />
        <div className="box-138">
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://geidaisai2026.com/\"}]}]"}
            src="/assets/pasted-artwork-179.svg"
            alt=""
            width={406}
            height={191}
            className="el-135"
          />
        </div>
      </section>
      <section className="box-139">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/ZnEXceuCtfmEXqbUA?g_st=il\"}]}]"}
          src="/assets/pasted-artwork-192.svg"
          alt=""
          width={326}
          height={66}
          className="google2"
        />
      </section>
      <section className="box-144">
        <Image
          src="/assets/pasted-artwork-193.svg"
          alt=""
          width={562}
          height={181}
          className="svg-148"
        />
        <div className="box-145">
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://kpufes.com/\"}]}]"}
            src="/assets/pasted-artwork-179.svg"
            alt=""
            width={406}
            height={191}
            className="el-137"
          />
        </div>
      </section>
      <section className="box-140">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/q7N6d7AU35q5W2HC7?g_st=in\"}]}]"}
          src="/assets/pasted-artwork-192.svg"
          alt=""
          width={326}
          height={66}
          className="google3"
        />
      </section>
      <section className="box-142">
        <Image
          src="/assets/pasted-artwork-194.svg"
          alt=""
          width={674}
          height={181}
          className="svg-149"
        />
        <div className="box-143">
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://nf.la/\"}]}]"}
            src="/assets/pasted-artwork-179.svg"
            alt=""
            width={406}
            height={191}
            className="el-136"
          />
        </div>
      </section>
      <section className="box-141">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://www.google.co.jp/maps/place/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6+%E5%90%89%E7%94%B0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9+%E6%9C%AC%E9%83%A8%E6%A7%8B%E5%86%85/@35.0271195,135.7786612,17z/data=!3m2!4b1!5s0x60010857f2d5c407:0xa51ccd9fd0612078!4m6!3m5!1s0x600108562446b2bb:0x17026e2b02f706d9!8m2!3d35.0271151!4d135.7812361!16s%2Fg%2F120x68zh?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D\"}]}]"}
          src="/assets/pasted-artwork-192.svg"
          alt=""
          width={326}
          height={66}
          className="google4"
        />
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-16"
      />
    </>
  );
}
