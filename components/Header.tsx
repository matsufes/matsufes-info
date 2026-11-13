import Link from "next/link";
import Image from "next/image";

export default function Header({ hiddenClassName = "", instanceId }: { hiddenClassName?: string; instanceId?: string } = {}) {
  return (
    <nav data-instance-hidden={hiddenClassName || undefined} id={instanceId || undefined} data-toggle-show={instanceId ? "flex" : undefined} className="header-25">
      <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
        src="/assets/pasted-artwork-283.svg"
        alt=""
        width={158}
        height={156}
        className="el-2039"
      />
      <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1966">
        <Image
          src="/assets/pasted-artwork-285.svg"
          alt=""
          width={132}
          height={74}
          className="svg-417"
        />
      </div>
      <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1977">
        <div className="box-761">
          <div className="el-1968">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1967">
              <span
                className="crisp-svg svg-394"
                style={{ ["--crisp-svg-width"]: "43px", ["--crisp-svg-ratio"]: "43 / 31" } as import("react").CSSProperties}
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-131.svg"
                  alt="メニューを閉じる"
                  width={86}
                  height={62}
                />
              </span>
            </div>
          </div>
          <div className="container-133">
            <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1969">
              {"松ヶ崎祭について"}
            </p>
            <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1970">
              <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-490">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p-2" className="button-491">
                {"mf56メインテーマ"}
              </Link>
              <Link href="/sponsor" id="協賛-p-2" className="button-492">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p-2" className="button-493">
                {"お知らせ"}
              </Link>
            </div>
            <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1971">
              {"企画さがし"}
            </p>
            <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1972">
              <Link href="/search" id="言葉-p-2" className="button-494">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p-2" className="button-495">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p-2" className="button-496">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p-2" className="button-497">
                {"きみのしおり"}
              </Link>
            </div>
            <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1973">
              {"ご案内"}
            </p>
            <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1974">
              <Link href="/attention" id="ご来場の-p-2" className="button-498">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p-2" className="button-499">
                {"行き方・会場地図"}
              </Link>
              <Link href="/survey" id="アンケ〜ト-p-2" className="button-500">
                {"来場者アンケート"}
              </Link>
              <Link href="/question" id="ご質問-p-2" className="button-501">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p-2" className="button-502">
                {"相互リンク"}
              </Link>
            </div>
            <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1975">
              {"公式特集"}
            </p>
            <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1976">
              <Link href="/committee" id="委員会企画-p-2" className="button-503">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p-2" className="button-504">
                {"m-1グランプリ"}
              </Link>
              <Link href="/matsupiyo-old" id="まつぴよ-p-2" className="button-505">
                {"公式メンバー「まつぴよ」"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="el-2014">
        <div className="container-138">
          <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1986">
            <div className="el-1978">
              <div className="box-762">
                <p className="text-542">
                  {"まつがさきさい"}
                </p>
                <p className="text-543">
                  {"松ヶ崎祭"}
                </p>
              </div>
              <p className="text-544">
                {"について"}
              </p>
            </div>
            <div id="div-33" data-toggle-show="flex" data-inview className="el-1979" />
            <div id="div-34" data-toggle-show="flex" className="el-1985">
              <div id="menu1-2" data-inview className="container-134">
                <Link href="/about" className="el-1980">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="el-1981">
                  {"mf56メインテーマ"}
                </Link>
                <Link href="/sponsor" className="el-1982">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-1983">
                  {"お知らせ"}
                </Link>
                <div id="menu1-3" className="el-1984" />
              </div>
            </div>
          </div>
          <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1995">
            <div className="el-1987">
              <div className="box-763">
                <p className="text-545">
                  {"きかく"}
                </p>
                <p className="text-546">
                  {"企画"}
                </p>
              </div>
              <p className="text-547">
                {"さがし"}
              </p>
            </div>
            <div id="div-35" data-toggle-show="flex" data-inview className="el-1988" />
            <div id="div-36" data-toggle-show="flex" className="el-1994">
              <div id="menu1-4" data-inview className="container-135">
                <Link href="/search" className="el-1989">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-1990">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-1991">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-1992">
                  {"きみのしおり"}
                </Link>
                <div id="menu1-5" className="el-1993" />
              </div>
            </div>
          </div>
          <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2005">
            <div className="el-1996">
              <p className="text-548">
                {"ご"}
              </p>
              <div className="box-764">
                <p className="text-549">
                  {"あんない"}
                </p>
                <p className="text-550">
                  {"案内"}
                </p>
              </div>
            </div>
            <div id="div-37" data-toggle-show="flex" data-inview className="el-1997" />
            <div id="div-39" data-toggle-show="flex" className="el-2004">
              <div id="menu1-6" data-inview className="container-136">
                <Link href="/attention" className="el-1998">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-1999">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-2000">
                  {"来場者アンケート"}
                </Link>
                <Link href="/question" className="el-2001">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-2002">
                  {"相互リンク"}
                </Link>
                <div id="menu1-7" className="el-2003" />
              </div>
            </div>
          </div>
          <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2013">
            <div className="el-2006">
              <div className="box-765">
                <p className="text-551">
                  {"こうしきとくしゅー"}
                </p>
                <p className="text-552">
                  {"公式特集"}
                </p>
              </div>
            </div>
            <div id="div-40" data-toggle-show="flex" data-inview className="el-2007" />
            <div id="div-38" data-toggle-show="flex" className="el-2012">
              <div id="menu1-8" data-inview className="container-137">
                <Link href="/committee" className="el-2008">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="el-2009">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/matsupiyo-old" className="el-2010">
                  {"公式メンバー「まつぴよ」"}
                </Link>
                <div id="menu1-9" className="el-2011" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
