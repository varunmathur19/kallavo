"use client";

import Image from "next/image";
import SliceButton from "../common/Shopbutton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: "Luxury Ceramic Vase", category: "Home Decor", price: "₹3,999", oldPrice: "₹5,999", image: "/home/product-1.png" },
  { name: "Elegant Temple Jar", category: "Premium Collection", price: "₹4,499", oldPrice: "₹6,999", image: "/home/product-1.png" },
  { name: "Modern Wall Plate", category: "Wall Decoration", price: "₹2,999", oldPrice: "₹4,999", image: "/home/product-1.png" },
  { name: "Designer Table Decor", category: "Table Accessories", price: "₹3,499", oldPrice: "₹5,499", image: "/home/product-1.png" },
];

export default function ProductCard() {
  const cardRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = cardRef.current.filter(Boolean);
    if (cards.length === 0) return;

    // Clear previous animations
    ScrollTrigger.getAll().forEach(st => st.kill());

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.25,           // ← Yeh control karta hai ek ek karke aane ka gap
        ease: "power4.out",      // Bahut smooth ease
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",        // Section viewport mein aate hi shuru ho
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className=" bg-[#f7f4ef] p-8 w-full">
      {/* Heading */}
      <div className="text-center pt-[0px] md:pt-[40px]">
        <h2 className="text-4xl md:text-5xl font-bold text-[#af89bc]">
          Trending Items
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Explore our latest and most loved home decor collections
        </p>
      </div>

      {/* Product Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pb-[35px] md:pb-[40px] max-w-7xl mx-auto mt-5">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRef.current[index] = el;
            }}
            className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl will-change-transform"
          >
            {/* Sale Ribbon */}
            <div className="absolute left-[-45px] top-6 z-20 w-44 -rotate-45 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 py-2 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg">
              30% Off
            </div>

            {/* Image */}
            <div className="relative xl:h-[300px] lg:h-[200px] md:h-[320px] h-[300px] overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover p-5 transition-transform duration-700 hover:scale-105"
                priority={index < 2}
              />
            </div>

            {/* Card Content */}
            <div className="space-y-4 px-5 pb-5">
              <span className="text-sm font-medium text-[#af89bc]">
                {product.category}
              </span>

              <h2 className="xl:text-[20px] lg:text-[18px] md:text-[18px] text-[18px] font-bold text-[#af89bc]">
                {product.name}
              </h2>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-orange-500">
                  {product.price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              </div>

              <SliceButton className="w-full cursor-pointer">
                Add to Cart
              </SliceButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}