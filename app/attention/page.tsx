import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ご来場の皆さまへ",
  description: "松ヶ崎祭実行委員会からご来場の皆さまへのお願いです。",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muiixvz340" />
      <section className="el-438">
        <div className="el-439">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-440">
            <span
              className="crisp-svg pasted-artwork-svg-48"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-247.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-441">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-442">
              <span
                className="crisp-svg svg-203"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-171.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-443">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-444">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-445">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-446">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-447">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-121">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-122">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-123">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-124">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-448">
              <Link href="/search" id="言葉-p" className="button-125">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-126">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-127">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-128">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-449">
              <Link href="/attention" id="ご来場の-p" className="button-129">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-130">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-131">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-132">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-450">
              <Link href="/committee" id="委員会企画-p" className="button-133">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-134">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-135">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-451"
          >
            <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-452">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-453">
              <span
                className="crisp-svg svg-204"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-454">
                <Link href="/about" className="el-455">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-9">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-456">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-457">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-458">
              <span
                className="crisp-svg svg-205"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-459">
                <Link href="/search" className="el-460">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-461">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-462">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-463">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-464">
              <span
                className="crisp-svg svg-206"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-465">
                <Link href="/attention" className="el-466">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-467">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-468">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-469">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-470">
              <span
                className="crisp-svg svg-207"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-471">
                <Link href="/committee" className="el-472">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-11">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-473">
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
          className="el-474"
        />
      </section>
      <p className="box-76">
        <span
          className="crisp-svg pasted-artwork-svg-28"
        >
          <svg aria-hidden="true" width={845} height={130} viewBox="0 0 845 130" />
          <Image
            src="/assets/pasted-artwork-94.svg"
            alt=""
            width={1690}
            height={260}
          />
        </span>
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
        <span
          className="crisp-svg svg-79"
        >
          <svg aria-hidden="true" width={749} height={114} viewBox="0 0 749 114" />
          <Image
            src="/assets/pasted-artwork-116.svg"
            alt=""
            width={1498}
            height={228}
          />
        </span>
      </section>
      <section className="box-79">
        <p className="box-80">
          {"◇ ご来場の際は、公共交通機関をご利用ください。\n\n◇ 車・バイクでのご来場はご遠慮ください。\n\n◇ 自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n構内の自転車走行は禁止されています。\n\n◇ ペット(補助犬を除く)の同伴はご遠慮ください。\n\n◇ 酒類の持ち込みおよび飲酒は禁止されています。また、泥酔状態でのご来場もご遠慮ください。\n\n◇ 構内は喫煙所を除き、全面禁煙です。周辺道路での喫煙もご遠慮ください。\n\n◇ 当委員会から認められていない勧誘・宣伝・販売行為は禁止されています。\n\n◇ 企画を実施していない建物や講義室、工事区域内への立ち入りはご遠慮ください。\n\n◇ ゴミの分別にご協力ください。"}
        </p>
      </section>
      <section className="box-81">
        <span
          className="crisp-svg svg-80"
        >
          <svg aria-hidden="true" width={438} height={114} viewBox="0 0 438 114" />
          <Image
            src="/assets/pasted-artwork-117.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="box-82">
        <p className="box-83">
          {"◇ 落とし物をしたり、発見した場合は本部までお越しください。\n\n◇ 迷子を見つけた場合、お連れの方が迷子になった場合は本部までお越しください。\n\n◇ 急病人を発見した場合は、お近くの実行委員までお知らせください。\n\n◇ 怪我や体調が優れない場合は、本部または保健管理センターまでお越しください。 "}
        </p>
      </section>
      <section className="box-129">
        <span
          className="crisp-svg svg-141"
        >
          <svg aria-hidden="true" width={438} height={114} viewBox="0 0 438 114" />
          <Image
            src="/assets/pasted-artwork-178.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="box-133">
        <p className="box-134">
          {"開催日程順に掲載しています。"}
        </p>
      </section>
      <section className="box-130">
        <span
          className="crisp-svg svg-163"
        >
          <svg aria-hidden="true" width={577} height={181} viewBox="0 0 577 181" />
          <Image
            src="/assets/pasted-artwork-240.svg"
            alt=""
            width={1154}
            height={362}
          />
        </span>
        <div className="box-131">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://trias.link/2026/\"}]}]"}
            className="crisp-svg el-124"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-179.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-135">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/akv65Tn4vQnYoEfP8?g_st=ic\"}]}]"}
          src="/assets/pasted-artwork-192.svg"
          alt=""
          width={326}
          height={66}
          className="google1"
        />
      </section>
      <section className="box-136">
        <span
          className="crisp-svg svg-162"
        >
          <svg aria-hidden="true" width={625} height={181} viewBox="0 0 625 181" />
          <Image
            src="/assets/pasted-artwork-239.svg"
            alt=""
            width={1250}
            height={362}
          />
        </span>
        <div className="box-137">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://geidaisai2026.com/\"}]}]"}
            className="crisp-svg el-130"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-179.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-138">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/ZnEXceuCtfmEXqbUA?g_st=il\"}]}]"}
          src="/assets/pasted-artwork-192.svg"
          alt=""
          width={326}
          height={66}
          className="google2"
        />
      </section>
      <section className="box-143">
        <span
          className="crisp-svg svg-146"
        >
          <svg aria-hidden="true" width={562} height={181} viewBox="0 0 562 181" />
          <Image
            src="/assets/pasted-artwork-193.svg"
            alt=""
            width={1124}
            height={362}
          />
        </span>
        <div className="box-144">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://kpufes.com/\"}]}]"}
            className="crisp-svg el-132"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-179.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-139">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/q7N6d7AU35q5W2HC7?g_st=in\"}]}]"}
          src="/assets/pasted-artwork-192.svg"
          alt=""
          width={326}
          height={66}
          className="google3"
        />
      </section>
      <section className="box-141">
        <span
          className="crisp-svg svg-147"
        >
          <svg aria-hidden="true" width={674} height={181} viewBox="0 0 674 181" />
          <Image
            src="/assets/pasted-artwork-194.svg"
            alt=""
            width={1348}
            height={362}
          />
        </span>
        <div className="box-142">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://nf.la/\"}]}]"}
            className="crisp-svg el-131"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-179.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-140">
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
