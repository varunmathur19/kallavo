"use client";

import Image from "next/image";

const categories = [
  { name: "Decor", image: "/home/image-1.png" },
  { name: "Blue & White", image: "/home/image-2.png" },
  { name: "Artistry Glass", image: "/home/image-3.jpg" },
  // { name: "Kitchen", image: "/home/image-4.jpg" },
  { name: "French Floral", image: "/home/image-5.png" },
  { name: "Lighting", image: "/home/image-6.jpg" },
  { name: "Abstract Art", image: "/home/image-7.jpg" },
  { name: "Furniture", image: "/home/image-8.png" },
  { name: "Wall Art", image: "/home/image-9.jpg" },
  { name: "New Collection", image: "/home/image-10.jpg" },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#f7f4ef] lg:py-6 py-3 overflow-hidden border-y border-[#e8e1d7]">
      {/* Marquee */}
      <div className="flex w-max animate-marquee">
        {[...categories, ...categories].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center mx-6 cursor-pointer group"
          >
            <div className="relative w-18 h-18 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#d8c7ae] shadow-sm transition duration-300 group-hover:scale-105">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-3 text-[15px] font-medium text-[#222] whitespace-nowrap">
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}