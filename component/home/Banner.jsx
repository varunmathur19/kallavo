import Image from "next/image";
import Link from "next/link";

import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const Banner = () => {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/home/slider-image.avif"
        alt="Banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/30 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          <div className="flex justify-end">
            <div className="max-w-xl text-right">

              {/* <span className="inline-block bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs tracking-[4px] uppercase px-4 py-2 rounded-full mb-6">
                New Collection 2026
              </span> */}

              <h1 className={`${satisfy.className} text-4xl md:text-6xl xl:text-[35px] font-serif text-white leading-tight`}>
                Elevate Your Timeless Décor
                <br />
                Home With
                <span className="block text-[#af89bc]">
                  
                </span>
              </h1>

              <p className="mt-6 text-lg text-white/85 leading-8">
                Discover handcrafted décor, elegant furniture, premium
                lighting, kitchen essentials and artistic collections
                designed to transform every corner of your home.
              </p>

              <div className="flex justify-end flex-wrap gap-4 mt-10">
                <Link href="/products">
                  <button className="bg-[#af89bc] hover:bg-[#fff] hover:text-[#af89bc] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                    Shop Now
                  </button>
                </Link>

                <Link href="/collections">
                  <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
                    Explore Collection
                  </button>
                </Link>
              </div>

              <div className="flex justify-end items-center gap-10 mt-12 text-white">
                <div>
                  <h3 className="text-3xl font-bold">10K+</h3>
                  <p className="text-sm text-white/70">Happy Customers</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">500+</h3>
                  <p className="text-sm text-white/70">Premium Products</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">4.9★</h3>
                  <p className="text-sm text-white/70">Customer Rating</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;