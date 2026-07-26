
"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Wall Decor", image: "/home/image-1.png" },
  { name: "Home & Festive Decor", image: "/home/image-2.png" },
  { name: "Corporate Gifting", image: "/home/image-3.jpg" },
  { name: "Corporate Branding", image: "/home/image-4.jpg" },
  { name: "Customised Gift Items", image: "/home/image-5.png" },
  { name: "Personalised Gift", image: "/home/image-6.jpg" },
  { name: "MDF Printed Cutout", image: "/home/image-7.jpg" },
  { name: "Rangoli Design", image: "/home/image-8.png" },
  { name: "MDF Cutout", image: "/home/image-9.jpg" },
  { name: "Rakhi Base", image: "/home/image-10.jpg" },
  { name: "Acrylic Cutout", image: "/home/image-1.png" },
  { name: "UV & Insert Sheets", image: "/home/image-2.png" },
  { name: "Name Plates", image: "/home/image-3.jpg" },
  { name: "Wall Hangings", image: "/home/image-4.jpg" },
  { name: "Premium Wall Decor", image: "/home/image-5.png" },
  { name: "LED Clip-On Frames", image: "/home/image-6.jpg" },
  { name: "Hampers", image: "/home/image-7.jpg" },
  { name: "Neon Sign Board", image: "/home/image-8.png" },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#f7f4ef] lg:py-6 py-3 overflow-hidden border-y border-[#e8e1d7]">
      {/* Marquee */}
      <div className="flex w-max animate-marquee">
  {[...categories, ...categories].map((item, index) => (
    <Link
      key={index}
      href="/product"
      className="flex-shrink-0 flex flex-col items-center mx-6 cursor-pointer group"
    >
      <div className="relative w-15 h-15 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#d8c7ae] shadow-sm transition duration-300 group-hover:scale-105">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="md:mt-3 mt-0 md:text-[15px] text-[13px] font-medium text-[#222] whitespace-nowrap">
        {item.name}
      </h3>
    </Link>
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