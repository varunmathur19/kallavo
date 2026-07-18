"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/home/banner-image-1.jpg",
  "/home/banner-image-2.jpg",
  // "/mansha-image/homepage-faq.jpg",
];

export default function BannerImage() {

  const [active, setActive] = useState(0);
  const [playReveal, setPlayReveal] = useState(false);


  useEffect(() => {

    setPlayReveal(true);

    const interval = setInterval(() => {
      setPlayReveal(false);

      setTimeout(() => {
        setActive((prev) => (prev + 1) % images.length);
        setPlayReveal(true);
      }, 100);

    }, 4000);


    return () => clearInterval(interval);

  }, []);


  return (
    <section className="w-full overflow-hidden max-w-[1500px] mx-auto ">

<div className="relative lg:h-[400px] md:h-[300px] xl:h-[500px] h-[200px] w-full overflow-hidden">

        <div
          className={`absolute inset-0 overflow-hidden ${
            playReveal
              ? "banner-slide-reveal"
              : "banner-slide-hidden"
          }`}
        >

          <Image
            src={images[active]}
            alt="Banner"
            fill
            priority
            className={`object-cover ${
              playReveal ? "banner-img-zoom" : ""
            }`}
          />

        </div>


        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">

          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                setPlayReveal(true);
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                active === index
                  ? "w-8 bg-white"
                  : "bg-white/50"
              }`}
            />
          ))}

        </div>


      </div>


      <style jsx global>{`

        @keyframes banner-clip-reveal {
          from {
            clip-path: inset(0% 0% 0% 100%);
          }

          to {
            clip-path: inset(0% 0% 0% 0%);
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


        .banner-slide-hidden {
          clip-path: inset(0% 0% 0% 100%);
        }


        .banner-slide-reveal {
          animation: banner-clip-reveal 1.2s cubic-bezier(0.76,0,0.24,1) forwards;
        }


        .banner-img-zoom {
          animation: banner-img-zoom 1.2s cubic-bezier(0.76,0,0.24,1) forwards;
        }


      `}</style>


    </section>
  );
}