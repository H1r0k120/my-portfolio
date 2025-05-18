"use client";

import Link from "next/link";

export default function PlatformerDetail() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">3D Platformer Game</h1>
      <img
        src="/images/3d-platformer.png"
        alt="3D Platformer Game"
        className="w-full max-w-4xl rounded mb-6"
      />
      <p className="max-w-4xl mb-6 text-lg leading-relaxed">
        これは私がJavaScriptとThree.jsを使って制作した3Dプラットフォーマーゲームです。
        リアルタイムに動く足場やコイン、敵キャラクターを配置し、ステージクリアを目指すアクション性の高いゲームになっています。

        物理挙動や重力、ジャンプ操作などの基本的なゲームプレイを実装し、複数のレベル(レベル数2)を用意して難易度が徐々に上がる構成にしました。
        また、HUD表示でスコアや残り時間、残機、レベル情報をリアルタイムに表示し、ゲーム進行をわかりやすくしています。

        敵との接触や落下によるライフ減少の仕組みもあり、プレイヤーに戦略的な操作を要求します。
      </p>
      <p className="mt-4 text-indigo-600 font-medium group-hover:underline">
        <a
          href="https://h1r0k120.github.io/3dgame/"
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