"use client";

import { useState } from "react";
import { Lato } from "next/font/google";
import { Satisfy } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const faqs = [
  {
    q: "How do I find my correct size?",
    a: "Every product page has a detailed size chart with bust, waist and length measurements. If you're between sizes, we recommend sizing up for the most comfortable fit.",
  },
  {
    q: "What is your return & exchange policy?",
    a: "We offer easy returns within 7 days of delivery. Items must be unworn, unwashed and with original tags attached. Exchanges are free — returns are refunded to your original payment method.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes, COD is available on all orders across India. A small convenience fee may apply depending on your pincode, shown at checkout.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders are dispatched within 24–48 hours and typically delivered within 3–7 business days depending on your location.",
  },
  {
    q: "How should I care for my outfit?",
    a: "Most of our pieces are hand-embroidered — we recommend gentle dry cleaning to preserve the fabric and thread work. Detailed care instructions are included with every order.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className={`${lato.className} relative w-full bg-[#0f0d12] py-[35px] md:py-[70px] px-6 overflow-hidden`}>

      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#af89bc]/20 blur-[120px]" />

      <div className="relative max-w-3xl mx-auto">

        <div className="text-center mb-14">

       <span className={`${satisfy.className} text-xl tracking-[0.3em] uppercase text-[#af89bc]`}>
  Kallavo
</span>
          <h2 className="mt-3 text-4xl md:text-5xl text-white font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-lg text-white/50">
            Everything you need to know before you shop with us
          </p>

        </div>


        <div className="flex flex-col gap-3 cursor-pointer">

          {faqs.map((item, i) => {

            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-[#af89bc]/60 bg-[#af89bc]/[0.06]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >

                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >

                  <span
                    className={`text-xl md:text-2xl font-medium transition-colors ${
                      isOpen ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.q}
                  </span>


                  <span
                    className={`shrink-0 flex items-center justify-center h-7 w-7 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#af89bc] bg-[#af89bc] rotate-45"
                        : "border-white/20"
                    }`}
                  >

                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={isOpen ? "text-[#0f0d12]" : "text-white/70"}
                    >
                      <path
                        d="M6 1V11M1 6H11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>

                  </span>

                </button>


                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-5 text-lg leading-relaxed text-white/55">
                      {item.a}
                    </p>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}