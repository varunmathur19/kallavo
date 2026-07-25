"use client";
import { useState, useMemo } from "react";
import { Shirt, Crown, Gem, Sparkles, Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";


const categories = [
  { id: 1, name: "Sarees", icon: Sparkles },
  { id: 2, name: "Lehengas", icon: Crown },
  { id: 3, name: "Kurtis", icon: Shirt },
  { id: 4, name: "Suits", icon: ShoppingBag },
  { id: 5, name: "Indo-Western", icon: Gem },
  { id: 6, name: "Bridal Edit", icon: Heart },
];

const products = {
  1: [
    { id: "saree-1", name: "Royal Silk Saree", image: "/product/product1.png", price: 6500 },
    { id: "saree-2", name: "Banarasi Saree", image: "/product/product2.jpg", price: 12500 },
    { id: "saree-3", name: "Designer Saree", image: "/product/product3.jpg", price: 9800 },
    { id: "saree-4", name: "Wedding Saree", image: "/product/product4.jpg", price: 18500 },
    { id: "saree-5", name: "Party Wear Saree", image: "/product/product5.jpg", price: 7500 },
    { id: "saree-6", name: "Cotton Saree", image: "/product/product6.jpg", price: 4200 },
  ],
  2: [
    { id: "lehenga-1", name: "Bridal Lehenga", image: "/product/product2.jpg", price: 22500 },
    { id: "lehenga-2", name: "Velvet Lehenga", image: "/product/product4.jpg", price: 16800 },
    { id: "lehenga-3", name: "Designer Lehenga", image: "/product/product6.jpg", price: 14200 },
    { id: "lehenga-4", name: "Floral Lehenga", image: "/product/product1.png", price: 9800 },
    { id: "lehenga-5", name: "Party Lehenga", image: "/product/product5.jpg", price: 13500 },
    { id: "lehenga-6", name: "Classic Lehenga", image: "/product/product3.jpg", price: 7500 },
  ],
  3: [
    { id: "kurti-1", name: "Printed Kurti", image: "/product/product3.jpg", price: 1800 },
    { id: "kurti-2", name: "Cotton Kurti", image: "/product/product6.jpg", price: 2200 },
    { id: "kurti-3", name: "Anarkali Kurti", image: "/product/product2.jpg", price: 3200 },
    { id: "kurti-4", name: "Straight Kurti", image: "/product/product5.jpg", price: 2500 },
    { id: "kurti-5", name: "Designer Kurti", image: "/product/product1.png", price: 4500 },
    { id: "kurti-6", name: "Festive Kurti", image: "/product/product4.jpg", price: 3800 },
  ],
  4: [
    { id: "suit-1", name: "Cotton Suit", image: "/product/product4.jpg", price: 5200 },
    { id: "suit-2", name: "Silk Suit", image: "/product/product1.png", price: 8900 },
    { id: "suit-3", name: "Printed Suit", image: "/product/product5.jpg", price: 4800 },
    { id: "suit-4", name: "Designer Suit", image: "/product/product3.jpg", price: 12500 },
    { id: "suit-5", name: "Party Suit", image: "/product/product6.jpg", price: 9800 },
    { id: "suit-6", name: "Wedding Suit", image: "/product/product2.jpg", price: 14500 },
  ],
  5: [
    { id: "indo-1", name: "Fusion Wear", image: "/product/product5.jpg", price: 6800 },
    { id: "indo-2", name: "Indo-Western Dress", image: "/product/product3.jpg", price: 9200 },
    { id: "indo-3", name: "Ethnic Gown", image: "/product/product1.png", price: 13800 },
    { id: "indo-4", name: "Cape Style Dress", image: "/product/product6.jpg", price: 10500 },
    { id: "indo-5", name: "Modern Kurta Set", image: "/product/product2.jpg", price: 7200 },
    { id: "indo-6", name: "Designer Fusion", image: "/product/product4.jpg", price: 8500 },
  ],
  6: [
    { id: "bridal-1", name: "Luxury Bridal Set", image: "/product/product6.jpg", price: 24500 },
    { id: "bridal-2", name: "Bridal Collection", image: "/product/product5.jpg", price: 19800 },
    { id: "bridal-3", name: "Premium Bridal Wear", image: "/product/product4.jpg", price: 17200 },
    { id: "bridal-4", name: "Wedding Collection", image: "/product/product3.jpg", price: 21500 },
    { id: "bridal-5", name: "Royal Bride Look", image: "/product/product2.jpg", price: 18900 },
    { id: "bridal-6", name: "Exclusive Bridal", image: "/product/product1.png", price: 26500 },
  ],
};

export default function ProductPage() {
  const [active, setActive] = useState(1);
  const [price, setPrice] = useState(8000);

  const activeCategory = categories.find((c) => c.id === active);

  // Filter products based on selected max price
  const filteredProducts = useMemo(() => {
    return products[active].filter((product) => product.price <= price);
  }, [active, price]);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#2B2620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10">
          {/* Sidebar */}
          <aside className="md:sticky md:top-8 md:self-start">
            <div className="mb-6 text-center">
              <p className="text-[18px] font-serif tracking-[0.25em] uppercase text-[#af89bc] font-medium">
                Kallavo Collection
              </p>
            </div>

            <div className="flex md:flex-col gap-2 md:gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.id === active;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`relative flex items-center gap-3 shrink-0 md:w-full text-left px-4 py-3 rounded-md transition-all duration-300 cursor-pointer
                      ${isActive ? "bg-[#af89bc] text-[#FBF8F3]" : "bg-transparent text-[#2B2620] hover:bg-[#EFE9DC]"}`}
                  >
                    <span
                      className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-white transition-all duration-300
                        ${isActive ? "h-6 opacity-100" : "h-0 opacity-0"}`}
                    />
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className={isActive ? "text-[#fff]" : "text-[#af89bc]"}
                    />
                    <span className="text-sm whitespace-nowrap">{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Price filter */}
            <div className="mt-6 md:mt-8 px-1">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#6B1E2B]">
                  Max Price
                </span>
                <span className="font-serif text-lg text-[#1F3D2B]">
                  ₹{price.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min={1500}
                max={25000}
                step={500}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                style={{ accentColor: "#af89bc" }}
                className="w-full h-1 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#888780] mt-1">
                <span>₹1,500</span>
                <span>₹25,000</span>
              </div>
            </div>
          </aside>

          {/* RIGHT SECTION */}
          <main>
            <div className="mb-8 text-center">
              <h1 className="font-serif md:text-[28px] text-[24px] xl:text-[32px] text-[#1F3D2B]">
                {activeCategory.name}
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <Link
        key={product.id}
        href={`/product/${product.id}`}
        className="overflow-hidden bg-white block hover:shadow-md transition-shadow duration-300"
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full xl:h-[300px] lg:h-[230px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#1F3D2B]">
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-[#af89bc]">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-gray-500">
            Under ₹{price.toLocaleString("en-IN")}
          </p>

          <div className="group relative mt-4 w-full overflow-hidden border border-transparent bg-[#af89bc] py-2 text-white text-center transition-all duration-500 hover:border-[#af89bc]">
            <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#af89bc]">
              View Details
            </span>
          </div>
        </div>
      </Link>
    ))
  ) : (
    <p className="col-span-full text-center py-12 text-gray-500">
      No products found under ₹{price.toLocaleString("en-IN")}
    </p>
  )}
</div>
          </main>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .font-serif { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>
    </div>
  );
}