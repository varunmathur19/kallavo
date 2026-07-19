"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/home/banner-image-1.jpg",
  "/home/banner-image-2.jpg",
];

const marqueeText = "✦ Handcrafted Luxury • Timeless Elegance • Premium Home Decor • Free Shipping on Orders Above ₹5000 • 30 Days Easy Return ✦";

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
    <section className="w-full overflow-hidden max-w-[1500px] mx-auto relative">
      <div className="relative lg:h-[400px] md:h-[300px] xl:h-[500px] h-[220px] w-full overflow-hidden">

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

        {/* Next Image with Animation */}
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

        {/* ==================== GLASS MARQUEE ==================== */}
        <div className="absolute top-0 left-0 right-0 z-30 bg-white/10 backdrop-blur-xl border-b border-white/20 py-2.5 overflow-hidden shadow-sm">
          <div className="marquee-container">
            <div className="marquee-text text-white text-sm font-medium tracking-[1.5px] whitespace-nowrap">
              {marqueeText}
              <span className="mx-8">{marqueeText}</span>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating || index === currentIndex) return;
                setNextIndex(index);
                setIsAnimating(true);
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-white" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes banner-clip-reveal {
          from { clip-path: inset(0% 0% 0% 100%); }
          to { clip-path: inset(0% 0% 0% 0%); }
        }

        @keyframes banner-img-zoom {
          from { transform: scale(1.15); }
          to { transform: scale(1); }
        }

        .banner-slide-reveal {
          animation: banner-clip-reveal 1.2s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .banner-img-zoom {
          animation: banner-img-zoom 1.3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        /* Marquee */
        .marquee-container {
          overflow: hidden;
          width: 100%;
        }

        .marquee-text {
          display: inline-block;
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}