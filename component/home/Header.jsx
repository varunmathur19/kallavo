"use client";

import React, { useState } from "react";
import { Satisfy } from "next/font/google";
import Image from "next/image";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto lg:px-8 px-4">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          {/* Logo */}
<a href="/" className="flex items-center">
  <Image
    src="/home/kallavo-logo-1.png"
    alt="Kallavo"
    width={70}
    height={50}
    className="object-contain"
  />
</a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
            <a
              href="/"
              className="relative text-sm font-semibold text-[#af89bc]"
            >
              Home
              <span className="absolute -bottom-3 left-0 w-full h-[2px] rounded-full bg-[#af89bc]" />
            </a>

            <a
              href="/collections"
              className="group relative text-sm font-semibold tracking-[2px] uppercase text-gray-500 hover:text-[#af89bc] transition-all"
            >
              Collections
              <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-[#af89bc] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="/contact"
              className="group relative text-sm font-semibold text-gray-500 hover:text-[#af89bc] transition-all"
            >
              Contact
              <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-[#af89bc] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            {/* Heart - Desktop */}
            <button className="hidden md:block text-gray-500 hover:text-[#af89bc] transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-7-4.35-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.65-7 10-7 10z"
                />
              </svg>
            </button>

            {/* Hamburger - Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#af89bc]"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-5">
            <nav className="flex flex-col gap-5">
              <a
                href="/"
                className="text-[#af89bc] font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>

              <a
                href="/collections"
                className="text-gray-600 hover:text-[#af89bc]"
                onClick={() => setIsOpen(false)}
              >
                Collections
              </a>

              <a
                href="/contact"
                className="text-gray-600 hover:text-[#af89bc]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              <button className="flex items-center gap-2 text-gray-600 hover:text-[#af89bc]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-7-4.35-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.65-7 10-7 10z"
                  />
                </svg>
                Wishlist
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}