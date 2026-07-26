"use client";

import Image from "next/image";
import SliceButton from "../common/Shopbutton";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Premium Wall Decor",
    category: "Wall Decor",
    price: "₹1,499",
    image: "/home/product-1.png",
  },
  {
    id: 2,
    title: "Modern Wall Frame",
    category: "Wall Decor",
    price: "₹2,299",
    image: "/home/product-2.png",
  },
  {
    id: 3,
    title: "Festive Decoration",
    category: "Home & Festive Decor",
    price: "₹899",
    image: "/home/product-3.png",
  },
  {
    id: 4,
    title: "Corporate Gift Box",
    category: "Corporate Gifting",
    price: "₹1,899",
    image: "/home/product-4.png",
  },
  {
    id: 5,
    title: "Office Branding Kit",
    category: "Corporate Branding",
    price: "₹2,999",
    image: "/home/product-1.png",
  },
  {
    id: 6,
    title: "Customised Photo Frame",
    category: "Customised Gift Items",
    price: "₹1,299",
    image: "/home/product-4.png",
  },
  {
    id: 7,
    title: "Personalised Name Gift",
    category: "Personalised Gift",
    price: "₹999",
    image: "/home/product-2.png",
  },
  {
    id: 8,
    title: "MDF Printed Cutout",
    category: "MDF Printed Cutout",
    price: "₹699",
    image: "/home/product-4.png",
  },
  {
    id: 9,
    title: "Designer Rangoli",
    category: "Rangoli Design",
    price: "₹599",
    image: "/home/product-2.png",
  },
  {
    id: 10,
    title: "MDF Cutout",
    category: "MDF Cutout",
    price: "₹799",
    image: "/home/product-1.png",
  },
  {
    id: 11,
    title: "Rakhi Base",
    category: "Rakhi Base",
    price: "₹299",
    image: "/home/product-3.png",
  },
  {
    id: 12,
    title: "Acrylic Cutout",
    category: "Acrylic Cutout",
    price: "₹999",
    image: "/home/product-4.png",
  },
  {
    id: 13,
    title: "UV & Insert Sheet",
    category: "UV & Insert Sheets",
    price: "₹499",
    image: "/home/product-2.png",
  },
  {
    id: 14,
    title: "Premium Name Plate",
    category: "Name Plates",
    price: "₹1,499",
    image: "/home/product-3.png",
  },
  {
    id: 15,
    title: "Wooden Wall Hanging",
    category: "Wall Hangings",
    price: "₹1,799",
    image: "/home/product-1.png",
  },
  {
    id: 16,
    title: "Luxury Wall Decor",
    category: "Premium Wall Decor",
    price: "₹3,999",
    image: "/home/product-1.png",
  },
  {
    id: 17,
    title: "LED Clip-On Frame",
    category: "LED Clip-On Frames",
    price: "₹2,499",
    image: "/home/product-2.png",
  },
  {
    id: 18,
    title: "Gift Hamper",
    category: "Hampers",
    price: "₹1,999",
    image: "/home/product-3.png",
  },
  {
    id: 19,
    title: "Custom Neon Sign Board",
    category: "Neon Sign Board",
    price: "₹4,999",
    image: "/home/product-4.png",
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
    <Link
      key={product.id}
      href={`/product`}
      className="block"
    >
      <div className="cursor-pointer bg-white rounded-sm md:rounded-2xl overflow-hidden shadow-none md:shadow-md md:hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
          />

          {product.badge && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        <div className="md:p-5 p-2">
          <h3 className="font-semibold text-center text-sm md:text-lg text-gray-900">
            {product.title}
          </h3>
        </div>
      </div>
    </Link>
  ))}
</div>
        <div className="flex justify-center mt-10">
  <SliceButton href="/product" className="cursor-pointer">
    View More
  </SliceButton>
</div>
      </div>
    </section>
  );
}