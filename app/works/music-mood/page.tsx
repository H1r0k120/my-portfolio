"use client";

import Link from "next/link";

export default function PlatformerDetail() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">音楽気分メーカー</h1>
      <img
        src="/images/music-mood.png"
        alt="音楽気分メーカー"
        className="w-full max-w-4xl rounded mb-6"
      />
      <p className="max-w-4xl mb-6 text-lg leading-relaxed">
        これはReactとTailwind CSSを使って制作した「音楽気分メーカー」というWebアプリです。ユーザーが「リラックス」「元気」「集中」などの気分を選ぶと、それに合ったSpotifyプレイリストと説明文が表示され、背景の色も気分に合わせて変化します。
        気分の選択にはアニメーション付きのボタンを使い、視覚的な楽しさと操作性を両立。ReactのuseStateで状態管理を行い、Tailwind CSSでスタイリ
        気分に合った音楽を手軽に楽しめるシンプルで直感的なツールとして設計しました。
      </p>
      <p className="mt-4 text-indigo-600 font-medium group-hover:underline">
        <a
          href="https://github.com/H1r0k120/music-mood-maker"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
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