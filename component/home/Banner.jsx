import Image from "next/image";
import Link from "next/link";
import { Satisfy } from "next/font/google";
import SliceButton from "../common/Shopbutton";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const Banner = () => {
  return (
    <>
      {/* Mobile Heading (Only Mobile) */}
      <div className="block md:hidden px-4 py-5 text-center bg-white">
        <h1
          className={`${satisfy.className} text-2xl text-black leading-tight`}
        >
          Elevate Your Timeless Décor
          <br />
          Home With{" "}
          <span className="text-[#af89bc]">Kallavo</span>
        </h1>
      </div>

      <section className="relative w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[650px] overflow-hidden max-w-[1500px] mx-auto">
        {/* Background Image */}
        <Image
          src="/home/slider-image.avif"
          alt="Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/30 to-black/70" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-12">
            <div className="flex justify-end">
              <div className="max-w-xl text-right">

                {/* Desktop / Tablet Heading */}
                <h1
                  className={`${satisfy.className} hidden md:block text-[24px] lg:text-[26px] xl:text-[35px] text-white leading-tight`}
                >
                  Elevate Your Timeless Décor
                  <br />
                  Home With{" "}
                  <span className="inline md:inline xl:block text-[#af89bc]">
                    Kallavo
                  </span>
                </h1>

                <p className="md:mt-5 mt-2 lg:mt-6 text-[10px] sm:text-sm md:text-base lg:text-lg text-white/85 leading-4 sm:leading-6 lg:leading-8 max-w-[220px] sm:max-w-[320px] md:max-w-[450px] lg:max-w-full ml-auto">
                  Discover handcrafted décor, elegant furniture, premium
                  lighting, kitchen essentials and artistic collections
                  designed to transform every corner of your home.
                </p>

                <div className="flex justify-end flex-wrap gap-2 md:gap-4 md:mt-7 mt-2 lg:mt-10">
                <SliceButton
  href="/products"
  className="cursor-pointer"
>
  Shop Now
</SliceButton>

                  {/* <Link href="/collections">
                    <button className="border border-white text-white hover:bg-white hover:text-black px-3 py-1.5 sm:px-5 sm:py-2.5 lg:px-8 lg:py-4 rounded-full text-[10px] sm:text-sm lg:text-base font-semibold transition-all duration-300">
                      Explore Collection
                    </button>
                  </Link> */}
                </div>

                <div className="flex justify-end items-center gap-4 sm:gap-6 lg:gap-10 md:mt-7 mt-2 lg:mt-12 text-white">
                  <div>
                    <h3 className="text-base sm:text-xl lg:text-3xl font-bold">
                      10K+
                    </h3>
                    <p className="text-[8px] sm:text-xs text-white/70">
                      Happy Customers
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl lg:text-3xl font-bold">
                      500+
                    </h3>
                    <p className="text-[8px] sm:text-xs text-white/70">
                      Premium Products
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl lg:text-3xl font-bold">
                      4.9★
                    </h3>
                    <p className="text-[8px] sm:text-xs text-white/70">
                      Customer Rating
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;