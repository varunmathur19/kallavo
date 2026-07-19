"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Design notes (Kallavo):
 * - No stock photos. Each review is tagged with the swatch colour of the
 *   garment the customer bought — the picker below the card doubles as a
 *   tiny "fabric swatch" rail instead of generic dots.
 * - Cards sit like garments on a rack: the active review is centred and in
 *   focus, the neighbours peek in from either side, softened and scaled
 *   down, and slide over on autoplay/click.
 * - Fonts: swap the classes below for your actual next/font vars if you've
 *   set up Playfair Display (display) + Inter or Poppins (body). Falls back
 *   to font-serif / font-sans until then.
 */

const testimonials = [
  {
    name: "Ritika Sharma",
    location: "Jaipur",
    garment: "Banarasi Silk Saree",
    swatch: "#7A1F3D",
    rating: 5,
    text: "The zari work on the pallu matched the site photos exactly, which almost never happens with silk. Wore it to my cousin's sangeet and three aunties asked where it was from.",
  },
  {
    name: "Naina Kapoor",
    location: "Lucknow",
    garment: "Chikankari Anarkali",
    swatch: "#C8973E",
    rating: 5,
    text: "Ordered a size up on the fit guide's advice and it was spot on. The hand-embroidery is dense, not the thin machine kind you get at this price elsewhere.",
  },
  {
    name: "Meher Dsouza",
    location: "Bengaluru",
    garment: "Bridal Lehenga",
    swatch: "#8C2F3D",
    rating: 5,
    text: "I was nervous ordering bridalwear online, but they called to confirm blouse measurements before dispatch. The lehenga arrived twelve days before the wedding, exactly as promised.",
  },
  {
    name: "Priya Nair",
    location: "Mumbai",
    garment: "Handblock Kurta Set",
    swatch: "#4C6B4F",
    rating: 4,
    text: "Colour was slightly warmer than the photo, but the cotton is genuinely breathable for Mumbai humidity. Their exchange desk swapped my size in four days, no back and forth.",
  },
  {
    name: "Anjali Verma",
    location: "Delhi",
    garment: "Organza Saree",
    swatch: "#B8895A",
    rating: 5,
    text: "This is my third saree from them. The organza holds its shape through a full day of events without going limp, and the packaging alone felt like a gift.",
  },
];

function Sparkles({ count }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm leading-none ${
            i < count ? "text-[#C8973E]" : "text-[#e6dccb]"
          }`}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

function PaisleyMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="w-9 h-9 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M24 6c9 0 14 7 14 15 0 6-4 9-9 9-4 0-6-2-6-5 0-2 1.5-3.5 3.5-3.5S30 23 30 21c0-4-3-7-8-7-6 0-10 5-10 12 0 8 6 14 14 14"
        fill="none"
        stroke="#C8973E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const timerRef = useRef(null);

  const go = useCallback(
    (i) => setCurrent(((i % total) + total) % total),
    [total]
  );
  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  return (
    <section
      className="relative overflow-hidden py-[35px] md:py-[50px]"
      style={{ backgroundColor: "#FBF6F0" }}
    >
      {/* ambient thread lines */}
      {/* <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        aria-hidden="true"
      >
        <line x1="0" y1="20%" x2="100%" y2="15%" stroke="#7A1F3D" strokeWidth="1" />
        <line x1="0" y1="85%" x2="100%" y2="90%" stroke="#C8973E" strokeWidth="1" />
      </svg> */}

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-5">
        
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight"
            style={{ color: "#2E2621" }}
          >
           Testinomials 
        
          </h2>
        </div>

        {/* Rack / carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative h-[420px] sm:h-[380px] md:h-[360px] flex items-center justify-center">
            {testimonials.map((t, i) => {
              let offset = i - current;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const abs = Math.abs(offset);

              const style = {
                transform: `translateX(${offset * 62}%) scale(${
                  isActive ? 1 : 0.82
                })`,
                opacity: abs > 1 ? 0 : isActive ? 1 : 0.45,
                filter: isActive ? "blur(0px)" : "blur(1.5px)",
                zIndex: 10 - abs,
                pointerEvents: isActive ? "auto" : "none",
              };

              return (
                <article
                  key={t.name}
                  aria-hidden={!isActive}
                  style={style}
                  className="motion-reduce:transition-none absolute w-[88%] sm:w-[70%] md:w-[52%] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <div
                    className="relative rounded-[28px] bg-white px-7 py-9 md:px-10 md:py-11 shadow-[0_20px_45px_-15px_rgba(122,31,61,0.18)]"
                    style={{ borderTop: `5px solid ${t.swatch}` }}
                  >
                    {/* hanging tag */}
                    <div className="absolute -top-5 right-8 flex flex-col items-center">
                      <span
                        className="h-4 w-px"
                        style={{ backgroundColor: "#c9b9a3" }}
                      />
                      <span
                        className="mt-5 rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wide uppercase bg-white"
                        style={{ borderColor: t.swatch, color: t.swatch }}
                      >
                        {t.garment}
                      </span>
                    </div>

                    <PaisleyMark />

                    <p
                      className="mt-4 text-[16px] md:text-[17px] leading-relaxed"
                      style={{ color: "#3d3329" }}
                    >
                      {t.text}
                    </p>

                    <div className="mt-7 flex items-center justify-between">
                      <div>
                        <p
                          className="font-serif text-lg"
                          style={{ color: "#2E2621" }}
                        >
                          {t.name}
                        </p>
                        <p className="text-xs tracking-wide text-[#8A7A6E]">
                          {t.location}
                        </p>
                      </div>
                      <Sparkles count={t.rating} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F3D]"
          >
            <span className="text-[#7A1F3D]">←</span>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F3D]"
          >
            <span className="text-[#7A1F3D]">→</span>
          </button>
        </div>

        {/* Swatch rail */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => go(i)}
              aria-label={`Show review from ${t.name}`}
              aria-current={i === current}
              className="group relative h-3.5 w-3.5 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F3D]"
              style={{
                backgroundColor: t.swatch,
                transform: i === current ? "scale(1.35)" : "scale(1)",
                boxShadow:
                  i === current ? `0 0 0 3px #FBF6F0, 0 0 0 4.5px ${t.swatch}` : "none",
              }}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-xs tracking-widest text-[#8A7A6E]">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}