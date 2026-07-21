import React from "react";

export default function Section3() {
  return (
    <section className="w-full py-[35px] md:py-[70px] px-5 lg:px-0  lg:px-20 font-lato bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Our Mission */}
        <div className="lg:mb-14 mb-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#af89bc] mb-3 lg:mb-6 text-center md:text-left">
            Our Mission
          </h2>

          <p className="text-gray-700 text-base lg:leading-8 md:leading-7 text-center md:text-left">
            Our mission at The Decor Kart has always been to surprise and
            delight you with unexpected, distinctive finds for your home. We
            source and craft all our products with care, ensuring that any
            treasure you find at The Decor Kart is unique, just like you.
          </p>
        </div>

        {/* The Future */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#af89bc] mb-3 lg:mb-6 text-center md:text-left">
            The Future
          </h2>

          <p className="text-gray-700 text-base lg:leading-8 md:leading-7 text-center md:text-left">
            Our work constantly revolves around the excellence of classic
            elegance and contemporary style, and around a sophisticated search
            of materials to ensure we bring forth personalised elegant
            ‘treasures’. Not swayed by fleeting trends, TDK offers a timeless
            range of products that have luxury as a value and durability as a
            fundamental requirement. We aim to build one of the most
            customer-centric home decor brand, with a strong omni-channel
            presence across India.
          </p>
        </div>
      </div>
    </section>
  );
}