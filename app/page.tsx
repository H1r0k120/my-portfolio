"use client";

import { useState } from "react";
import FeaturedWorks from "./components/FeaturedWorks";


export default function Page() {
  // ナビのアクティブ状態管理（任意）
  const [active, setActive] = useState("works");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Hiroki Portfolio
        </div>
        <nav className="space-x-6">
          <button
            className={`hover:underline ${active === "works" ? "underline" : ""}`}
            onClick={() => {
              document.getElementById("featured-works")?.scrollIntoView({ behavior: "smooth" });
              setActive("works");
            }}
          >
            作品一覧
          </button>
          <button
            className={`hover:underline ${active === "profile" ? "underline" : ""}`}
            onClick={() => {
              document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
              setActive("profile");
            }}
          >
            プロフィール
          </button>
        </nav>
      </header>

      {/* Heroセクション */}
      <section className="flex-grow bg-gradient-to-r from-gray-300 via-indigo-200 to-purple-200 text-gray-800 flex flex-col justify-center items-center text-center p-12">
        <h1 className="text-5xl font-extrabold mb-4">プログラミング×趣味の遊び場へようこそ！</h1>
        <p className="text-xl max-w-xl">
          楽しくコードを書いています。ここでは自作の作品や学びの記録を紹介しています。
        </p>
      </section>

      {/* Featured Works */}
      <section id="featured-works" className="py-16 bg-white px-6">
        <FeaturedWorks />
      </section>

      {/* プロフィールセクション */}
      <section id="profile" className="py-16 bg-gray-50 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">プロフィール</h2>
        <p className="text-lg">
          こんにちは、Hirokiです。趣味でプログラミングを楽しみつつ、新しい技術にもどんどん挑戦しています。
          普段はPythonを使った開発やデータ分析を中心に活動しています。  
          趣味でWeb開発やゲーム制作にも挑戦中。    
          新しい技術を学びながら、楽しく成長していきたいと思っています。
        </p>
      </section>

      <br />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center space-x-6">
        <a
          href="https://github.com/H1r0k120"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/your-twitter-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
