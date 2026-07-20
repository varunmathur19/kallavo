"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/home/banner-image-1.jpg",
  "/home/banner-image-2.jpg",
];

const marqueeText =
  "✦ Handcrafted Luxury • Timeless Elegance • Premium Home Decor • Free Shipping on Orders Above ₹5000 • 30 Days Easy Return ✦";

export default function BannerImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
 const [nextIndex, setNextIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) return;

      const next = (currentIndex + 1) % images.length;
      setNextIndex(next);
      setIsAnimating(true);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handleAnimationEnd = () => {
    if (nextIndex !== null) {
      setCurrentIndex(nextIndex);
      setNextIndex(null);
      setIsAnimating(false);
    }
  };

  return (
    <section className="w-full max-w-[1500px] mx-auto overflow-hidden">

      {/* ===================== MARQUEE (IMAGE KE UPAR) ===================== */}
  <div className="bg-gradient-to-r from-[#7d5a8c] via-[#af89bc] to-[#d4b8dd] backdrop-blur-md border-b border-white/20 shadow-[0_4px_20px_rgba(175,137,188,0.35)] text-white py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>
      </div>

      {/* ===================== BANNER ===================== */}
      <div className="relative w-full lg:h-[400px] md:h-[300px] xl:h-[500px] h-[220px] overflow-hidden">

        {/* Current Image */}
        <div className="absolute inset-0">
          <Image
            src={images[currentIndex]}
            alt="Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Next Image */}
        {nextIndex !== null && (
          <div
            className="absolute inset-0 banner-slide-reveal"
            onAnimationEnd={handleAnimationEnd}
          >
            <Image
              src={images[nextIndex]}
              alt="Banner"
              fill
              className="object-cover banner-img-zoom"
            />
          </div>
        )}

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating || index === currentIndex) return;

                setNextIndex(index);
                setIsAnimating(true);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===================== STYLES ===================== */}
      <style jsx global>{`
        /* Banner Animation */
        @keyframes banner-clip-reveal {
          from {
            clip-path: inset(0 0 0 100%);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes banner-img-zoom {
          from {
            transform: scale(1.15);
          }
          to {
            transform: scale(1);
          }
        }

        .banner-slide-reveal {
          animation: banner-clip-reveal 1.2s
            cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .banner-img-zoom {
          animation: banner-img-zoom 1.3s
            cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        /* Marquee */
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-track {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }

        .marquee-track span {
          padding-right: 80px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 2px;
          color: #fff;
        }

        @media (min-width: 768px) {
          .marquee-track span {
            font-size: 15px;
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}