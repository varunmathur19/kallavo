"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SliceButton from "../common/Shopbutton";
import { getCollectionHome } from "../../app/api/contact";

export default function Listing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCollectionHome();
  }, []);

  const fetchCollectionHome = async () => {
    try {
      const response = await getCollectionHome();

      console.log(response);

      if (response.success) {
        setProducts(response.data || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-[35px] md:py-[70px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Collection
          </h2>

          <p className="mt-3 text-gray-600">
            Premium products crafted with care
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

          {products.map((product) => (

            <Link
              href="/product"
              key={product._id}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow">

                <div className="relative w-full h-56">

                  <Image
                    src={
                      product.image
                        ? `http://localhost:3001/uploads/${product.image}`
                        : "/no-image.png"
                    }
                    alt={product.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />

                </div>

                <div className="p-4">

                  <h3 className="text-center font-semibold">
                    {product.title}
                  </h3>

                </div>

              </div>
            </Link>

          ))}

        </div>

        <div className="flex justify-center mt-10">
          <SliceButton href="/product">
            View More
          </SliceButton>
        </div>

      </div>
    </section>
  );
}