"use client";

import Image from "next/image";
import SliceButton from "../common/Shopbutton";

const products = [
  {
    id: 1,
    title: "Classic Leather Notebook",
    desc: "Premium leather notebook for daily journaling.",
    price: "₹1,499",
    image: "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg",
    badge: null,
  },
  {
    id: 2,
    title: "Bamboo Sunglasses",
    desc: "Eco-friendly and stylish bamboo frame sunglasses.",
    price: "₹2,299",
    image: "https://images.pexels.com/photos/2499615/pexels-photo-2499615.jpeg",
    badge: "Sale",
  },
  {
    id: 3,
    title: "Eco Water Bottle",
    desc: "Sustainable, leak-proof, BPA-free hydration.",
    price: "₹899",
    image: "https://images.pexels.com/photos/3945656/pexels-photo-3945656.jpeg",
    badge: null,
  },
  {
    id: 4,
    title: "Minimal Lounge Chair",
    desc: "Comfortable, modern design with soft cushions.",
    price: "₹18,999",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    badge: null,
  },
  {
    id: 5,
    title: "Premium Watch",
    desc: "Elegant timepiece with sleek modern design.",
    price: "₹24,999",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
    badge: null,
  },
  {
    id: 6,
    title: "Smart Wooden Lamp",
    desc: "Aesthetic, warm, and modern mood lighting.",
    price: "₹3,299",
    image: "https://images.pexels.com/photos/5632392/pexels-photo-5632392.jpeg",
    badge: null,
  },
  {
    id: 7,
    title: "Wireless Headphones",
    desc: "Crystal-clear sound, noise-canceling tech.",
    price: "₹6,499",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    badge: null,
  },
  {
    id: 8,
    title: "Running Sneakers",
    desc: "Lightweight, breathable running shoes.",
    price: "₹4,299",
    image: "https://images.pexels.com/photos/7319313/pexels-photo-7319313.jpeg",
    badge: null,
  },
  {
    id: 9,
    title: "Travel Backpack",
    desc: "Durable and stylish for all adventures.",
    price: "₹5,499",
    image: "https://images.pexels.com/photos/1289903/pexels-photo-1289903.jpeg",
    badge: null,
  },
  {
    id: 10,
    title: "Ultrabook Laptop",
    desc: "Lightweight, powerful, and long battery life.",
    price: "₹89,999",
    image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg",
    badge: null,
  },
];

export default function Listing() {
  return (
    <section className="py-[35px] md:py-[70px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Collection
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Premium products crafted with care
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer bg-white rounded-sm md:rounded-2xl overflow-hidden shadow-none md:shadow-md md:hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {product.badge && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="md:p-5 p-2">
                <h3 className="font-semibold text-center text-sm md:text-lg text-gray-900 ">
                  {product.title}
                </h3>
                {/* <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                  {product.desc}
                </p> */}

                <div className="mt-4 flex items-center justify-between">
                  {/* <span className="text-2xl font-bold text-[#af89bc]">
                    {product.price}
                  </span> */}
                  {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition">
                    Add to Cart
                  </button> */}
                {/* <SliceButton className="cursor-pointer ">
                  Add to Cart
                </SliceButton> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
  <SliceButton href="/products" className="cursor-pointer">
    View More
  </SliceButton>
</div>
      </div>
    </section>
  );
}