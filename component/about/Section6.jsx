import Image from "next/image";

export default function Section6() {
  return (
    <>
      {/* Banner Section */}
      <section className="font-lato">
        {/* Banner Image */}
        <div className="relative w-full h-[150px] md:h-[300px] lg:h-[400px] xl:h-[550px]">
          <Image
            src="/about/aboutbanner.jpg"
            alt="Newsletter Banner"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Desktop & Tablet Content */}
          <div className="hidden md:flex absolute inset-0 z-10 items-center h-full px-6 md:px-16 lg:px-24">
            <div className="max-w-lg text-white">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight xl:mb-4">
                WE WRITE REALLY GREAT EMAILS.
              </h2>

              <p className="text-base md:text-lg text-gray-200 xl:mb-8 mb-3">
                No Spam. Only updates about new launches and sales. Directly to
                your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-14 w-full sm:w-[350px] rounded-md bg-white px-5 text-gray-800 outline-none"
                />

                <button
                  type="submit"
                  className="h-14 rounded-md bg-[#af89bc] px-8 text-white font-medium transition hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Content (Image ke niche) */}
        <div className="block md:hidden px-6 py-8 bg-white">
          <div className="max-w-lg mx-auto">
            <h2 className="text-[28px] font-semibold leading-tight text-black mb-4">
              WE WRITE REALLY GREAT EMAILS.
            </h2>

            <p className="text-base text-gray-600 mb-6">
              No Spam. Only updates about new launches and sales. Directly to
              your inbox.
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-14 w-full rounded-md border border-gray-300 px-5 text-gray-800 outline-none"
              />

              <button
                type="submit"
                className="h-14 rounded-md bg-[#af89bc] text-white font-medium transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}