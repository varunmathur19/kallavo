"use client";

import Link from "next/link";

const SliceButton = ({
  children,
  href = "#",
  className = "",
}) => {
  return (
    <Link href={href}>
      <button
        className={`group relative overflow-hidden rounded-lg border-2 border-[#af89bc] bg-white px-8 py-3 active:scale-95 transition-all duration-300 ${className}`}
      >
        {/* Animated Background */}
        <span
          className="
            absolute
            left-1/2
            top-1/2
            h-[320%]
            w-0
            -translate-x-1/2
            -translate-y-1/2
            rotate-[30deg]
            bg-[#af89bc]
            transition-all
            duration-700
            ease-[cubic-bezier(0.83,0,0.17,1)]
            group-hover:w-[130%]
          "
        />

        {/* Text */}
        <span className="relative z-10 text-[#af89bc] font-semibold transition-colors duration-700 group-hover:text-white">
          {children}
        </span>
      </button>
    </Link>
  );
};

export default SliceButton;