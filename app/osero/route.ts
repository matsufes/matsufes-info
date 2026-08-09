const html = "<!DOCTYPE html>\n<html><head>\n        <title>タイトル</title>\n\n    </head>\n\n    <body>\n        <h1 id=\"id1\">ああああ</h1>\n        <h1 id=\"id2\">ああああ</h1>\n        <p>これは段落です。</p>\n\n        <div onclick=\"push()\">ケアｗｆｂｋ</div>\n\n        <input id=\"id3\">\n        <img src=\"/assets/game-ogp.png\">&gt;\n\n        <script>\n\n            function push() {\n                let moji = [\n                    \"ああああ\",\n                    \"いいいい\",\n                    \"うううう\",\n                    \"ええええ\",\n                    \"おおおお\"\n                ]\n                document.getElementById(\"id1\").innerText = moji[Math.floor(Math.random() * moji.length)];\n            }\n\n            \n            \n        </script>\n\n    \n</body></html>";

export const dynamic = "force-static";

export function GET() {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
