"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "https://picsum.photos/id/34/400/400", title: "Aleks Dorohovich" },
  { id: 2, src: "https://picsum.photos/id/39/400/400", title: "Luke Chesser" },
  { id: 3, src: "https://picsum.photos/id/56/400/400", title: "Sebastian Muller" },
  { id: 4, src: "https://picsum.photos/id/76/400/400", title: "Alexander Shustov" },
  { id: 5, src: "https://picsum.photos/id/124/400/400", title: "Anton Sulsky" },
  { id: 6, src: "https://picsum.photos/id/139/400/400", title: "Steve Richey" },
  { id: 7, src: "https://picsum.photos/id/159/400/400", title: "Shyamanta Baruah" },
  { id: 8, src: "https://picsum.photos/id/200/400/400", title: "Elias Carlsson" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 md:px-8 px-4 ">
      <div className="mx-auto max-w-6xl grid grid-cols-3 gap-2">

        {/* Main Image */}
        <div className="relative col-span-2 row-span-2 aspect-square border border-gray-300 overflow-hidden flex items-center justify-center bg-white">

          {selected ? (
            <>
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className="object-cover animate-[fadeIn_.5s_ease]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-white text-2xl font-light">
                  {selected.title}
                </h2>
              </div>
            </>
          ) : (
            <div className="text-center px-6">
              <h1 className="text-xl font-semibold">
                Projected Image Gallery
              </h1>

              <p className="text-gray-500 mt-3 text-sm">
                Select a thumbnail to animate its clone into the main stage.
              </p>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={`relative aspect-square overflow-hidden border transition duration-300 ${
              selected?.id === item.id
                ? "opacity-40"
                : "hover:opacity-80"
            }`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}