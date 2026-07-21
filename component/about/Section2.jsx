import Image from "next/image";



export default function Section2() {

  return (

    <section className="relative w-full font-lato">

      <div className="relative flex flex-col lg:min-h-[600px] lg:block">

        {/* Left - plain white space (lg+) */}

        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-white" />



        {/* Right - dark olive/taupe panel (lg+ full-height overlay) */}

        <div className="hidden lg:block absolute inset-y-0 right-0 w-[calc(50%+150px)] bg-[#6f6a5e] z-0" />



        {/* Image - top on mobile/md; layered on lg+ */}
<div
  className="relative order-1 z-20 mx-auto mt-10 h-[350px] w-full max-w-[350px] shadow-xl md:mt-16 md:h-[500px] md:max-w-[500px] lg:absolute xl:top-[-15px] lg:top-8 lg:left-1/2 lg:mx-0 lg:h-[400px] lg:w-[400px] lg:max-w-none xl:h-[500px] xl:w-[500px] lg:-translate-x-[calc(50%+250px)] xl:-translate-x-[calc(50%+300px)]"
>
  <Image
    src="/about/about-section1.jpg"
    alt="Established story"
    fill
    className="object-cover"
    priority
  />
</div>


        {/* Text - bg panel only behind content below lg */}

        <div className="order-2 relative z-10 w-full bg-[#af89bc]  lg:absolute lg:inset-y-0 lg:right-0 lg:w-[calc(50%+150px)] flex items-center justify-center px-8 md:px-20 py-[35px] md:py-[70px]">

          <div className="max-w-md text-center text-white">

            <h2 className="font-serif text-[24px] md:text-[28px] l mb-2 md:mb-3 lg:mb-4">

              Established in 2015

            </h2>



            <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] md:leading-7 md:mb-6 mb-2">

              With a strong innate design sense, Natasha has been collaborating

              with top architects and interior stylists from all over the

              country, since the past 10 years, for their requirements for

              projects in the residential, commercial and the hospitality

              arenas. Brij has been a pioneer in the wholesale segment,

              supplying furniture, wall art, home décor and accessories and

              expertise to many top business groups.

            </p>



            <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] md:leading-7 md:mb-6 mb-2">

              With years of experience shared between them and an inborn

              entrepreneurial fire, the duo started The Décor Kart with a

              belief – To make The Décor Kart an expression of a cultivated

              and sophisticated lifestyle, where creativity and innovation

              amalgamate with luxury and fine taste

            </p>

          </div>

        </div>

      </div>



      {/* Scroll to top button */}

      {/* <button

        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

        className="absolute bottom-6 right-6 md:right-10 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"

        aria-label="Scroll to top"

      >

        ↑

      </button> */}

    </section>

  );

}

