import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative w-full h-[500px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Banner Image */}
      <Image
        src="/about/aboutbanner.jpg"
        alt="About Us Banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
     
    </section>
  );
}