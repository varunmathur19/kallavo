"use client";

import Image from "next/image";

const clients = [
  { name: "Vrindavan", image: "/client/client-1.png" },
  { name: "Bareilly", image: "/client/client-2.png" },
  { name: "Chandigarh", image: "/client/client-3.png" },
  { name: "Chennai", image: "/client/client-4.png" },
  { name: "Dehradun", image: "/client/client-5.png" },
  { name: "Faridabad", image: "/client/client-1.png" },
  { name: "Goa", image: "/client/client-2.png" },
];

const topClients = [...clients, ...clients];

export default function Client() {
  return (
    <section className="relative overflow-hidden bg-[#af89bc] py-[35px] md:py-[70px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/about/client-1.jpg')",
        }}
      />

      <div className="relative z-10">
        {/* Heading */}
        <div className="lg:mb-14 text-center md:mb-5 mb-10">
          <h2 className="font-lato text-3xl font-bold text-white md:text-5xl">
            Our Clients
          </h2>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="marquee flex w-max md:gap-10 gap-2">
            {topClients.map((item, index) => (
              <div
                key={index}
                className={`flex w-[150px] flex-col items-center ${
                  index % 2 !== 0 ? "mt-8" : ""
                }`}
              >
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-4 border-white shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-4 text-center text-lg font-medium text-white">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee {
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}