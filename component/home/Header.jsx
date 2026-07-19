"use client";

import React, { useState, useRef } from "react";
import { Satisfy } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef(null);
  const tlRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // GSAP Setup
  useGSAP(() => {
    if (!menuRef.current) return;

    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    // Menu slide in from right
    tl.fromTo(
      menuRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.65, ease: "power3.out" }
    );

    // Links stagger
    if (linksRef.current) {
      const links = linksRef.current.children;
      tl.fromTo(
        links,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.35"
      );
    }
  }, []);

  const toggleMenu = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const tl = tlRef.current;
    if (!tl) return;

    if (isOpen) {
      // === CLOSE ANIMATION ===
      tl.reverse();
      tl.eventCallback("onReverseComplete", () => {
        setIsOpen(false);
        isAnimatingRef.current = false;
      });
    } else {
      // === OPEN ANIMATION ===
      setIsOpen(true);
      setTimeout(() => {
        tl.restart();
        tl.eventCallback("onComplete", () => {
          isAnimatingRef.current = false;
        });
      }, 10);
    }
  };

  const closeMenu = () => {
    if (isOpen) toggleMenu();
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto lg:px-8 px-4">
        <div className="relative flex items-center justify-between h-20">
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
            <a href="/" className="relative text-sm font-semibold text-[#af89bc] uppercase transition-all">
              Home
              <span className="absolute -bottom-3 left-0 w-full h-[2px] rounded-full bg-[#af89bc]" />
            </a>
            <a href="/about" className="group relative text-sm font-semibold tracking-[2px] uppercase text-gray-500 hover:text-[#af89bc] transition-all">
              About
              <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-[#af89bc] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="/collections" className="group relative text-sm font-semibold tracking-[2px] uppercase text-gray-500 hover:text-[#af89bc] transition-all">
              Collections
              <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-[#af89bc] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="/contact" className="group relative text-sm font-semibold text-gray-500 uppercase hover:text-[#af89bc] transition-all">
              Contact
              <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-[#af89bc] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#af89bc] z-50"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Side Menu - Always in DOM */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[100] md:hidden overflow-hidden"
      >
        <div className="p-8 pt-24 flex flex-col h-full">
          <div ref={linksRef} className="flex flex-col gap-8 text-lg">
            <a href="/" onClick={closeMenu} className="text-[#af89bc] font-semibold hover:translate-x-2 transition-transform">
              Home
            </a>
            <a href="/about" onClick={closeMenu} className="text-gray-700 hover:text-[#af89bc] hover:translate-x-2 transition-all">
              About
            </a>
            <a href="/collections" onClick={closeMenu} className="text-gray-700 hover:text-[#af89bc] hover:translate-x-2 transition-all">
              Collections
            </a>
            <a href="/contact" onClick={closeMenu} className="text-gray-700 hover:text-[#af89bc] hover:translate-x-2 transition-all">
              Contact
            </a>

            <button onClick={closeMenu} className="flex items-center gap-3 text-gray-700 hover:text-[#af89bc] hover:translate-x-2 transition-all mt-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.65-7 10-7 10z" />
              </svg>
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}