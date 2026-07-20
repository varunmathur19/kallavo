"use client";

import Image from "next/image";
import { Satisfy } from "next/font/google";
import { useEffect, useState } from "react";
import SliceButton from "../common/Shopbutton";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const Banner = () => {
  const [count, setCount] = useState({
    customers: 0,
    products: 0,
    rating: 0,
  });

  useEffect(() => {
    let customers = 0;
    let products = 0;
    let rating = 0;

    const interval = setInterval(() => {
      if (customers < 10000) customers += 250;
      if (products < 500) products += 20;
      if (rating < 4.9) rating += 0.1;

      setCount({
        customers: Math.min(customers, 10000),
        products: Math.min(products, 500),
        rating: Number(Math.min(rating, 4.9).toFixed(1)),
      });

      if (
        customers >= 10000 &&
        products >= 500 &&
        rating >= 4.9
      ) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ==================== MOBILE TOP CONTENT ==================== */}
      <div className="block md:hidden bg-white px-4 py-5 text-center border-b">
        <h1
          className={`${satisfy.className} text-[20px] text-black leading-tight`}
        >
          Elevate Your Timeless Décor
          <br />
          Home With <span className="text-[#af89bc]">Kallavo</span>
        </h1>
      </div>

      {/* ==================== BANNER IMAGE SECTION ==================== */}
      <section className="relative w-full h-[420px] md:h-[520px] lg:h-[550px] xl:h-[650px] overflow-hidden max-w-[1500px] mx-auto">

        {/* Mobile Background Image */}
        <Image
          src="/home/banner-mobile-image.jpg"
          alt="Banner Mobile"
          fill
          priority
          className="object-cover object-center block md:hidden"
        />

        {/* Mobile Content Overlay */}
        <div className="absolute top-3 left-0 right-0 z-20 px-6 md:hidden">
          <div className="max-w-md mx-auto text-center">
            <p className="text-white text-[15px] leading-[18px]">
              Discover handcrafted décor, elegant furniture, premium lighting,
              kitchen essentials and artistic collections designed to transform
              every corner of your home.
            </p>

            <div className="mt-2">
              <SliceButton
                href="/products"
                className="cursor-pointer px-2 py-2 text-sm w-fit"
              >
                Shop Now
              </SliceButton>
            </div>
          </div>
        </div>

        {/* Desktop Background Image */}
        <Image
          src="/home/slider-image.avif"
          alt="Banner"
          fill
          priority
          className="object-cover object-center hidden md:block"
        />

        {/* Overlay */}
        <div className="absolute hidden md:block inset-0 bg-gradient-to-r from-black/10 via-black/30 to-black/60" />

        {/* Desktop + Tablet Content */}
        <div className="absolute inset-0 z-10 hidden md:flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
            <div className="flex justify-end">
              <div className="max-w-xl text-right">

                <h1
                  className={`${satisfy.className} text-[28px] lg:text-[35px] text-white leading-tight`}
                >
                  Elevate Your Timeless Décor
                  <br />
                  Home With{" "}
                  <span className="text-[#af89bc]">Kallavo</span>
                </h1>

                <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-md ml-auto">
                  Discover handcrafted décor, elegant furniture, premium
                  lighting, kitchen essentials and artistic collections
                  designed to transform every corner of your home.
                </p>

                <div className="flex justify-end mt-8">
                  <SliceButton href="/products" className="cursor-pointer">
                    Shop Now
                  </SliceButton>
                </div>

                {/* Counts */}
                <div className="flex justify-center md:justify-end gap-8 lg:gap-12 mt-10 text-white">

                  <div className="text-center md:text-right">
                    <h3 className="text-3xl lg:text-4xl font-bold">
                      {count.customers.toLocaleString()}+
                    </h3>
                    <p className="text-sm text-white/70">
                      Happy Customers
                    </p>
                  </div>

                  <div className="text-center md:text-right">
                    <h3 className="text-3xl lg:text-4xl font-bold">
                      {count.products}+
                    </h3>
                    <p className="text-sm text-white/70">
                      Premium Products
                    </p>
                  </div>

                  <div className="text-center md:text-right">
                    <h3 className="text-3xl lg:text-4xl font-bold">
                      {count.rating}★
                    </h3>
                    <p className="text-sm text-white/70">
                      Customer Rating
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>


        {/* Mobile Stats */}
        <div className="block md:hidden absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center text-white text-center">

              <div className="flex-1">
                <h3 className="text-3xl font-bold">
                  {count.customers.toLocaleString()}+
                </h3>
                <p className="text-xs mt-1 text-white/80">
                  Happy Customers
                </p>
              </div>

              <div className="flex-1 border-l border-r border-white/30">
                <h3 className="text-3xl font-bold">
                  {count.products}+
                </h3>
                <p className="text-xs mt-1 text-white/80">
                  Premium Products
                </p>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold">
                  {count.rating}★
                </h3>
                <p className="text-xs mt-1 text-white/80">
                  Customer Rating
                </p>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Banner;