import Image from 'next/image';

const works = [
  {
    title: "3D Platformer Game",
    description: "Three.jsを使った3Dジャンプアクションゲーム。動く足場や敵もいます！",
    imageUrl: "/images/3d-platformer.png",
    link: "/works/3d-platformer"
  },
  {
    title: "Music mood maker",
    description: "気分を選ぶと、おすすめのSpotifyプレイリストを表示してくれるWebアプリ",
    imageUrl: "/images/music-mood.png",
    link: "/works/music-mood"
  },
  {
    title: "百人一首ウェブアプリ",
    description: "百人一首をランダム再生してくれるウェブアプリです。",
    imageUrl: "/images/hyakuninn.png",
    link: "/works/hyakuninn"
  },
  
];

export default function FeaturedWorks() {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-extrabold mb-12 text-center text-gray-900">おすすめ作品</h2>
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {works.map(work => (
          <a
            key={work.title}
            href={work.link}
            className="group block border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white overflow-hidden"
          >
            <div className="relative w-full h-48 sm:h-40 md:h-48">
              <Image
                src={work.imageUrl}
                alt={work.title}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h3>
              <p className="text-gray-700 text-sm">{work.description}</p>
              <p className="mt-4 text-indigo-600 font-medium group-hover:underline">くわしく見る →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
