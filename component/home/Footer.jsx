"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="relative bg-[#af89bc] text-white overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-[35px] md:py-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-6">
              Support
            </h3>

            <ul className="space-y-3 text-white/80">
              <li><Link href="#">Contact Us</Link></li>
              {/* <li><Link href="#">Returns & Refunds</Link></li>
              <li><Link href="#">Shipping</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/80">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Products</Link></li>
              {/* <li><Link href="#">Gift Cards</Link></li> */}
              {/* <li><Link href="#">Blogs</Link></li> */}
              {/* <li><Link href="#">Stores</Link></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5 text-white/80">
              <div className="flex gap-3">
                <FaWhatsapp className="text-xl mt-1" />
                <div>
                  <p>+91 9045553748</p>
                  {/* <p>+91 9876543211</p> */}
                </div>
              </div>

              <div className="flex gap-3">
                <MdEmail className="text-xl mt-1" />
                <p>Kallavo555@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <MdLocationOn className="text-xl mt-1" />
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-6">
              Follow Us
            </h3>

            <div className="flex">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaPinterestP />,
                <FaYoutube />,
              ].map((icon, i) => (
                <Link
                  href="#"
                  key={i}
                  className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#7b7369] duration-300"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
       

      {/* Big Watermark */}
      <div className="pointer-events-none select-none text-center mt-10">
        <h1
          className="font-satisfy text-[90px] sm:text-[130px] lg:text-[220px] leading-none text-white/10"
          style={{ fontFamily: "'Satisfy', cursive" }}
        >
          Kallavo
        </h1>
      </div>
       <div className="border-t border-white/20 my-4" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <p>© 2026 Kallavo. All Rights Reserved.</p>

         
        </div>
      </div>
    </footer>
  );
}