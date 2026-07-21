"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Section5() {
  return (
    <section className="relative overflow-hidden bg-[#af89bc] py-[35px] md:py-[70px]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[100px]" />

    <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <div className="absolute -inset-3 rounded-2xl border border-orange-400/20" />
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
            <Image
              src="/about/founder.jpeg"
              alt="Founder"
              width={600}
              height={720}
              className="h-[480px] w-full object-cover grayscale-[15%] transition duration-700 hover:grayscale-0 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            className="absolute -bottom-6 -right-6 rounded-xl bg-orange-500 px-5 py-4 text-center shadow-lg shadow-orange-500/30"
          >
            <p className="text-2xl font-bold text-black">10+</p>
            <p className="text-xs font-medium text-black/70">Years Journey</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400 text-center md:text-left"
          >
            Our Story
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="md:mb-6 mb-2 text-4xl font-bold leading-tight text-white md:text-5xl text-center md:text-left"
          >
            Founder&rsquo;s Story
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="md:mb-5 mb-3 md:text-lg  text-[16px] text-white/70 text-center md:text-left"
          >
            Every successful brand begins with a dream—and ours began with a
            passion for creativity.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="md:mb-5 mb-2 leading-relaxed text-white/60 text-center md:text-left"
          >
            In{" "}
            <span className="relative font-semibold text-white ">
              2016, I started my professional journey as a Designer
            </span>{" "}
            for Vivo&rsquo;s vendor network, where I was responsible for
            handling design projects across{" "}
            <span className="font-semibold text-white">
              West Uttar Pradesh
            </span>
            . Those years became the foundation of my career, teaching me not
            only design but also branding, production, client relationships,
            quality standards, and the importance of delivering every project
            on time.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="leading-relaxed text-white/60 text-center md:text-left"
          >
            Although the job offered stability, I always dreamed of creating
            something of my own. With that vision, I made the bold decision
            to leave my job and started building my own{" "}
            <span className="relative inline-block font-semibold text-orange-400">
              Advertising Business
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-1 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <motion.path
                  d="M2 5 Q 50 -2, 100 5 T 198 5"
                  stroke="#fb923c"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>{" "}
            from the ground up.
          </motion.p>
        </div>
      </div>
    </section>
  );
}