"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const STORY_IMAGE = "/about/our-strory.jpg";

const SLIDE_VIEWPORT_RATIO = 0.78;
const GAP_MOBILE = 16;
const GAP_DESKTOP = 24;
const AUTOPLAY_INTERVAL_MS = 4500;

const SLIDES = [
  {
    id: "founders-story",
    title: "Founder's Story",
    body: (
      <>
        <p className="mb-4">
          Every successful brand begins with a dream—and ours began with a
          passion for creativity.
        </p>
        <p>
          In <strong>2016</strong>, I started my professional journey as a{" "}
          <strong>Designer for Vivo&apos;s vendor network</strong>, where I was
          responsible for handling design projects across{" "}
          <strong>West Uttar Pradesh</strong>. Those years became the foundation
          of my career, teaching me not only design but also branding,
          production, client relationships, quality standards, and the importance
          of delivering every project on time.
        </p>
      </>
    ),
  },
  {
    id: "advertising-business",
    title: "Our Journey",
    body: (
      <>
        <p className="mb-4">
          Although the job offered stability, I always dreamed of creating
          something of my own. With that vision, I made the bold decision to
          leave my job and started building my own{" "}
          <strong>Advertising Business</strong> from the ground up.
        </p>
        <p>
          The journey was far from easy. Every new step brought
          challenges—earning clients&apos; trust, managing projects, investing in
          new technologies, and growing with limited resources. But every
          obstacle became an opportunity to learn, improve, and move forward.
        </p>
      </>
    ),
  },
  {
    id: "milestone-2021",
    title: "2021 — A defining milestone",
    body: (
      <p>
        A defining milestone came in <strong>2021</strong>, when we began
        receiving <strong>direct projects from Chaudhary Charan Singh University</strong>.
        Delivering these prestigious assignments with precision and
        professionalism strengthened our reputation and opened the doors to
        larger opportunities.
      </p>
    ),
  },
  {
    id: "mdf-2022",
    title: "2022 — MDF décor & laser-cut",
    body: (
      <p>
        Inspired to expand our creativity, we entered the{" "}
        <strong>MDF décor and laser-cut products</strong> industry in{" "}
        <strong>2022</strong>. Starting in a completely new segment meant facing
        fresh challenges, but our commitment to innovation, quality, and
        continuous improvement helped us establish ourselves. Over time, we
        successfully delivered numerous{" "}
        <strong>large-scale, customized, and urgent orders</strong>, earning the
        confidence of customers through reliable service and exceptional
        craftsmanship.
      </p>
    ),
  },
  {
    id: "kallavo-today",
    title: "Kallavo today",
    body: (
      <>
        <p className="mb-4">
          Today, <strong>Kallavo</strong> is more than a brand—it is the result
          of years of dedication, perseverance, creativity, and continuous
          learning. Every product we create reflects our belief that great design
          is not just about appearance; it is about creating meaningful
          experiences that inspire and last.
        </p>
        <p className="mb-4">
          As we continue to grow, our mission remains the same:{" "}
          <strong>
            to deliver premium-quality handcrafted décor and customized products
            with innovation, precision, and passion, while building lasting
            relationships with every customer we serve.
          </strong>
        </p>
        <p>
          <strong>
            This is not just our business. It is our journey, our passion, and our
            promise.
          </strong>
        </p>
      </>
    ),
  },
];

export default function Section4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideStepPx, setSlideStepPx] = useState(0);
  const [slideWidthPx, setSlideWidthPx] = useState(0);
  const [viewportWidthPx, setViewportWidthPx] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const isJumpingRef = useRef(false);
  const autoplayPausedRef = useRef(false);

  const total = SLIDES.length;

  const carouselSlides = useMemo(
    () => [...SLIDES, { ...SLIDES[0], id: `${SLIDES[0].id}-loop-clone` }],
    []
  );

  const measureCarousel = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const gap = window.matchMedia("(min-width: 768px)").matches
      ? GAP_DESKTOP
      : GAP_MOBILE;
    const width = el.offsetWidth;
    const slideW = width * SLIDE_VIEWPORT_RATIO;
    setViewportWidthPx(width);
    setSlideWidthPx(slideW);
    setSlideStepPx(slideW + gap);
  }, []);

  useEffect(() => {
    isJumpingRef.current = isJumping;
  }, [isJumping]);

  useEffect(() => {
    measureCarousel();
    window.addEventListener("resize", measureCarousel);
    return () => window.removeEventListener("resize", measureCarousel);
  }, [measureCarousel]);

  useEffect(() => {
    const root = viewportRef.current;
    if (!root) return;

    const pause = () => {
      autoplayPausedRef.current = true;
    };
    const resume = () => {
      autoplayPausedRef.current = false;
    };

    root.addEventListener("mouseenter", pause);
    root.addEventListener("mouseleave", resume);
    root.addEventListener("focusin", pause);
    root.addEventListener("focusout", resume);

    const onVisibility = () => {
      autoplayPausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      root.removeEventListener("mouseenter", pause);
      root.removeEventListener("mouseleave", resume);
      root.removeEventListener("focusin", pause);
      root.removeEventListener("focusout", resume);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (slideStepPx <= 0) return;

    const id = window.setInterval(() => {
      if (autoplayPausedRef.current || isJumpingRef.current) return;
      setActiveIndex((i) => {
        if (i >= total - 1) return total;
        return i + 1;
      });
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [slideStepPx, total]);

  const centerOffsetPx =
    viewportWidthPx > 0 && slideWidthPx > 0
      ? (viewportWidthPx - slideWidthPx) / 2
      : 0;
  const offsetPx = activeIndex * slideStepPx - centerOffsetPx;

  const handleTransitionEnd = useCallback(() => {
    if (activeIndex !== total) return;
    setIsJumping(true);
    setActiveIndex(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsJumping(false));
    });
  }, [activeIndex, total]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => {
      if (i === 0) return total - 1;
      if (i === total) return total - 1;
      return i - 1;
    });
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i >= total - 1) return total;
      return i + 1;
    });
  }, [total]);

  const visualIndex =
    activeIndex >= total ? 0 : activeIndex;

  return (
    <section className="relative w-full bg-[#f8f7fa] py-[35px] md:py-[70px] font-lato overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#af89bc] mb-8 md:mb-10 text-center md:text-left">
          Our Journey
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6 lg:gap-6">
          <div ref={viewportRef} className="w-full lg:flex-1 min-w-0 overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-4 md:gap-6 will-change-transform"
              style={{
                transform:
                  slideStepPx > 0
                    ? `translateX(-${offsetPx}px)`
                    : undefined,
                transition: isJumping
                  ? "none"
                  : "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {carouselSlides.map((slide, index) => {
                const isActive =
                  index === activeIndex ||
                  (activeIndex === total && index === total);

                return (
                  <article
                    key={slide.id}
                    className="relative shrink-0"
                    style={
                      slideWidthPx > 0
                        ? { width: `${slideWidthPx}px` }
                        : undefined
                    }
                    aria-hidden={!isActive}
                  >
                    <div
                      className={`flex flex-col md:flex-row bg-white overflow-hidden shadow-lg min-h-[520px] md:min-h-[480px] lg:min-h-0 lg:h-[400px] xl:h-[440px] transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-40 md:opacity-45"
                      }`}
                    >
                      <div className="relative w-full md:w-[42%] lg:w-[44%] h-[300px] sm:h-[340px] md:h-full md:min-h-[480px] lg:min-h-0 lg:h-full shrink-0">
                        <Image
                          src={STORY_IMAGE}
                          alt=""
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 44vw"
                        />
                      </div>

                      <div className="relative w-full md:w-[58%] lg:w-[56%] bg-white px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-10 lg:py-8 xl:px-12 xl:py-10 flex flex-col justify-center text-left md:min-h-[480px] lg:min-h-0 lg:h-full overflow-y-auto max-h-[520px] md:max-h-none">
                        <h3 className="font-serif text-xl sm:text-2xl md:text-[1.65rem] lg:text-2xl xl:text-3xl text-gray-900 mb-4 md:mb-5 lg:mb-3 leading-snug">
                          {slide.title}
                        </h3>
                        <div className="text-xs sm:text-sm text-gray-700 leading-6 sm:leading-7 md:leading-8 lg:leading-6 xl:leading-7 [&_p]:mb-4 lg:[&_p]:mb-2.5 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-gray-900">
                          {slide.body}
                        </div>
                      </div>
                    </div>

                    {!isActive && (
                      <div
                        className="absolute inset-0 bg-[#6f6a5e]/45 pointer-events-none"
                        aria-hidden
                      />
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 shrink-0 text-white z-10">
            <button
              type="button"
              onClick={goPrev}
              className="text-xl sm:text-2xl md:text-3xl leading-none hover:opacity-80 transition-opacity px-1"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              className="text-xl sm:text-2xl md:text-3xl leading-none hover:opacity-80 transition-opacity px-1"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Slide {visualIndex + 1} of {total}
        </p>
      </div>
    </section>
  );
}
