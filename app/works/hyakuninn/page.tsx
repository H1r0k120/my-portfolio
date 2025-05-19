"use client";

import Link from "next/link";

export default function PlatformerDetail() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">百人一首ウェブアプリ</h1>
      <img
        src="/images/hyakuninn.png"
        alt="hyakuninn isshyu"
        className="w-full max-w-4xl rounded mb-6"
      />
      <p className="max-w-4xl mb-6 text-lg leading-relaxed">
        これはReactで制作した「百人一首ランダム再生」ウェブアプリです。
        ユーザーは百人一首のグループ（例えば「全体」やきまり字別グループ）を選択でき、選んだグループ内の和歌をランダム再生または連続再生で楽しめます。

        和歌の「上の句」「下の句」と読み仮名、作者名が表示され、該当する和歌の音声ファイルも再生可能です。
        再生モードは「ランダム再生」と「連続再生」の切り替えができ、操作はシンプルなボタンやプルダウンメニューで行います。

        ReactのuseStateで状態管理を行い、useEffectでデータ読み込みや音声再生制御を実装。
        グループごとにテーマカラーが変わるなど視覚的な工夫もあります。

        和歌学習や鑑賞に適した直感的で機能的なアプリとなっています。
      </p>
      <p className="mt-4 text-indigo-600 font-medium group-hover:underline">
        <a
          href="https://h1r0k120.github.io/hyakunin-isshu-reader/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          遊んでみる
        </a>
      </p>
      <br />
      <Link href="/">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          トップページに戻る
        </button>
      </Link>
    </main>
  );
}