"use client";

import Image from "next/image";
import SliceButton from "../common/Shopbutton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getHomeProducts } from "../../app/api/contact";

gsap.registerPlugin(ScrollTrigger);


const tabs = [
  "All",
  "Wall Decor",
  "Home & Festive Decor",
  "Corporate Gifting",
  "Corporate Branding",
  "Customised Gift Items",
  "Personalised Gift",
  "MDF Printed Cutout",
  "Rangoli Design",
  "MDF Cutout",
  "Rakhi Base",
  "Acrylic Cutout",
  "UV & Insert Sheets",
  "Name Plates",
  "Wall Hangings",
  "Premium Wall Decor",
  "LED Clip-On Frames",
  "Hampers",
  "Neon Sign Board",
];

export default function ProductCard() {
  const [activeTab, setActiveTab] = useState("All");
const [currentPage, setCurrentPage] = useState(1);
const [products, setProducts] = useState([]);

const [totalPages, setTotalPages] = useState(1);

const fetchProducts = async (page = 1) => {
  try {
    const res = await getHomeProducts(page);

    if (res.success) {
      setProducts(res.products);
      setTotalPages(res.totalPages);
      setCurrentPage(res.currentPage);
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchProducts(1);
}, []);

  // const [activeTab, setActiveTab] = useState("All");
  const cardRef = useRef([]);
  const containerRef = useRef(null);
 

// const [activeTab, setActiveTab] = useState("All");
// const [currentPage, setCurrentPage] = useState(1);

// const cardRef = useRef([]);
// const containerRef = useRef(null);


const filteredProducts =
  activeTab === "All"
    ? products
    : products.filter((product) => product.tab === activeTab);

useEffect(() => {
  setCurrentPage(1);
}, [activeTab]);


const currentProducts = filteredProducts;


  useEffect(() => {
    const cards = cardRef.current.filter(Boolean);
    if (cards.length === 0) return;

    ScrollTrigger.getAll().forEach(st => st.kill());

    gsap.fromTo(
      cards,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, [activeTab]); // Re-animate when tab changes

  return (
    <div ref={containerRef} className="bg-[#f7f4ef] md:p-8 px-4 w-full">
      {/* Heading */}
      <div className="text-center pt-[35px] md:pt-[40px]">
        <h2 className="text-4xl md:text-5xl font-bold text-[#af89bc]">
          Trending Items
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Explore our latest and most loved home decor collections
        </p>

        {/* Tabs - Yeh Text ke Niche Hai */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
            onClick={() => {
  setActiveTab(tab);
  setCurrentPage(1);
}}
              className={`px-5 cursor-pointer py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeTab === tab 
                  ? "bg-[#af89bc] text-white shadow-md" 
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pb-[35px] md:pb-[40px] max-w-7xl mx-auto mt-8">
       {currentProducts.map((product, index) => (
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
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL.replace("/api","")}/uploads/${product.image}`}
                alt={product.name}
                fill
                className="object-cover md:p-5 p-2 rounded-[20px] md:rounded-[0px] transition-transform duration-700 hover:scale-105"
                priority={index < 2}
              />
            </div>

            {/* Card Content */}
            <div className="space-y-3 px-5 pb-5">
              
            <div className="block md:block">
  {/* Mobile
  <div className="flex items-center justify-between gap-3 md:hidden">
    <h2 className="text-[18px] font-bold text-[#af89bc] leading-tight">
      {product.name}
    </h2>

    <span className="text-xl font-bold text-orange-500 whitespace-nowrap">
      {product.price}
    </span>
  </div> */}

  {/* Desktop / Tablet */}
  <div className="">
    <h2 className="xl:text-[20px] lg:text-[18px] md:text-[18px] line-clamp-1 xl:line-clamp-none text-[18px] font-bold text-[#af89bc]">
      {product.name}
    </h2>

   {/* Price */}
<div className="flex items-center gap-3">
  <span className="text-xl font-bold text-orange-500">
    {product.price}
  </span>
</div>


{/* Sizes */}
{product.sizes && (
  <div className="flex flex-wrap gap-2 mt-2">
    {product.sizes.map((size, i) => (
      <span
        key={i}
        className="xl:px-3 lg:px-2 px-2 py-1 text-xs rounded-full 
        bg-[#af89bc]/10 text-[#af89bc] 
        border border-[#af89bc]"
      >
        {size}
      </span>
    ))}
  </div>
)}
  </div>
</div>

              <SliceButton className="w-full cursor-pointer">
                Add to Cart
              </SliceButton>
            </div>
          </div>
        ))}
      </div>
     {totalPages > 1 && (
  <div className="flex justify-center gap-2 md:mt-6 mt-2 pb-10">
    <button
      disabled={currentPage === 1}
      onClick={() => {
  if (currentPage > 1) {
    fetchProducts(currentPage - 1);
  }
}}
      className="px-4 py-2 border border-[#af89bc] border rounded disabled:opacity-50"
    >
      Prev
    </button>

    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => fetchProducts(i + 1)}
        className={`w-10 h-10 rounded-full transition ${
          currentPage === i + 1
            ? "bg-[#af89bc] text-white"
            : "bg-white border border-gray-300"
        }`}
      >
        {i + 1}
      </button>
    ))}

    <button
      disabled={currentPage === totalPages}
      onClick={() => {
  if (currentPage < totalPages) {
    fetchProducts(currentPage + 1);
  }
}}
      className="px-4 py-2 border-[#af89bc] border rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
)}
    </div>
  );
}