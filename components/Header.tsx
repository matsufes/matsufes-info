import Link from "next/link";
import Image from "next/image";

export default function Header({ hiddenClassName = "", instanceId }: { hiddenClassName?: string; instanceId?: string } = {}) {
  return (
    <nav data-instance-hidden={hiddenClassName || undefined} id={instanceId || undefined} data-toggle-show={instanceId ? "flex" : undefined} className="header-25">
      <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
        src="/assets/pasted-artwork-278.svg"
        alt="トップに戻る"
        width={158}
        height={156}
        className="el-1970"
      />
      <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1893">
        <Image
          src="/assets/pasted-artwork-280.svg"
          alt="メニューを開く"
          width={132}
          height={74}
          className="el-1988"
        />
      </div>
      <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1905">
        <div className="box-756">
          <div className="el-1896">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1895">
              <span
                className="crisp-svg el-1894"
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
            <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1897">
              {"松ヶ崎祭について"}
            </p>
            <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1898">
              <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-475">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p-2" className="button-476">
                {"mf56メインテーマ"}
              </Link>
              <Link href="/sponsor" id="協賛-p-2" className="button-477">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p-2" className="button-478">
                {"お知らせ"}
              </Link>
            </div>
            <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1899">
              {"企画さがし"}
            </p>
            <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1900">
              <Link href="/search" id="言葉-p-2" className="button-479">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p-2" className="button-480">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p-2" className="button-481">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p-2" className="button-482">
                {"きみのしおり"}
              </Link>
            </div>
            <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1901">
              {"ご案内"}
            </p>
            <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1902">
              <Link href="/attention" id="ご来場の-p-2" className="button-483">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p-2" className="button-484">
                {"行き方・会場地図"}
              </Link>
              <Link href="/survey" id="アンケ〜ト-p-2" className="button-485">
                {"来場者アンケート"}
              </Link>
              <Link href="/question" id="ご質問-p-2" className="button-486">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p-2" className="button-487">
                {"相互リンク"}
              </Link>
            </div>
            <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1903">
              {"公式特集"}
            </p>
            <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1904">
              <Link href="/committee" id="委員会企画-p-2" className="button-488">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p-2" className="button-489">
                {"m-1グランプリ"}
              </Link>
              <Link href="/matsupiyo" id="まつぴよ-p-2" className="button-490">
                {"公式メンバー「まつぴよ」"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pc-5">
        <div className="container-138">
          <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1914">
            <div className="el-1906">
              <div className="box-757">
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
            <div id="div-33" data-toggle-show="flex" data-inview className="el-1907" />
            <div id="div-34" data-toggle-show="flex" className="el-1913">
              <div id="menu1-2" data-inview className="container-134">
                <Link href="/about" className="el-1908">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="el-1909">
                  {"mf56メインテーマ"}
                </Link>
                <Link href="/sponsor" className="el-1910">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-1911">
                  {"お知らせ"}
                </Link>
                <div id="menu1-3" className="el-1912" />
              </div>
            </div>
          </div>
          <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1923">
            <div className="el-1915">
              <div className="box-758">
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
            <div id="div-35" data-toggle-show="flex" data-inview className="el-1916" />
            <div id="div-36" data-toggle-show="flex" className="el-1922">
              <div id="menu1-4" data-inview className="container-135">
                <Link href="/search" className="el-1917">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-1918">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-1919">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-1920">
                  {"きみのしおり"}
                </Link>
                <div id="menu1-5" className="el-1921" />
              </div>
            </div>
          </div>
          <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1933">
            <div className="el-1924">
              <p className="text-548">
                {"ご"}
              </p>
              <div className="box-759">
                <p className="text-549">
                  {"あんない"}
                </p>
                <p className="text-550">
                  {"案内"}
                </p>
              </div>
            </div>
            <div id="div-37" data-toggle-show="flex" data-inview className="el-1925" />
            <div id="div-39" data-toggle-show="flex" className="el-1932">
              <div id="menu1-6" data-inview className="container-136">
                <Link href="/attention" className="el-1926">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-1927">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-1928">
                  {"来場者アンケート"}
                </Link>
                <Link href="/question" className="el-1929">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-1930">
                  {"相互リンク"}
                </Link>
                <div id="menu1-7" className="el-1931" />
              </div>
            </div>
          </div>
          <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1941">
            <div className="el-1934">
              <div className="box-760">
                <p className="text-551">
                  {"こうしきとくしゅー"}
                </p>
                <p className="text-552">
                  {"公式特集"}
                </p>
              </div>
            </div>
            <div id="div-40" data-toggle-show="flex" data-inview className="el-1935" />
            <div id="div-38" data-toggle-show="flex" className="el-1940">
              <div id="menu1-8" data-inview className="container-137">
                <Link href="/committee" className="el-1936">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="el-1937">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/matsupiyo" className="el-1938">
                  {"公式メンバー「まつぴよ」"}
                </Link>
                <div id="menu1-9" className="el-1939" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
