export default function PromoMenueGallery() {
  return (
    <div className="min-h-screen w-full bg-white px-4 md:px-8 lg:px-16">

      {/* Wood Background Container */}
      <div className="relative rounded-lg max-w-[1200px] mx-auto mt-10 md:mt-16 lg:mt-20 bg-[url('/woo3.jpg')] bg-cover bg-center bg-fixed p-6 md:p-10 lg:p-14 backdrop-blur-md">

        {/* Top Promo Poster Section */}
        <section className="w-full flex justify-center py-8">
          <div className="w-full max-w-[700px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/photo/Cheers.jpg"
              className="w-full h-auto"
              alt="Promo"
            />
          </div>
        </section>

        {/* Menu Section */}
        <section className="flex flex-col items-center justify-center py-12">

          {/* Title */}
          <h2 className="font-[UnifrakturCook] text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white mb-2 text-center drop-shadow-lg">
            host a holiday party at paddy mac’s!
          </h2>

          <div className="text-white mb-6 underline underline-offset-2 tracking-wide cursor-pointer text-sm sm:text-base md:text-lg font-serif">
            Catering and Events
          </div>

          {/* Main Container with Ham Background */}
          <div className="relative w-full bg-[#f8f6ef] flex flex-col items-center py-20 px-2 sm:px-6 md:px-10 overflow-hidden rounded-lg">

            {/* Ham Image Background */}
            <div
              className="absolute inset-0 w-full h-full transform scale-150 brightness-90"
              style={{
                backgroundImage: "url('/photo/Ham.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            ></div>

            {/* Content on Top */}
            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">

              {/* Menu Images */}
              <div className="flex justify-center gap-4 sm:gap-6 md:gap-10 items-start flex-wrap">
                <img
                  src="1.jpg"
                  alt="Menu 1"
                  className="w-64 sm:w-72 md:w-72 lg:w-80 rounded-md shadow-md border-2 border-white transition-transform duration-500 hover:scale-105"
                />

                <img
                  src="2.jpg"
                  alt="Menu 2"
                  className="w-64 sm:w-72 md:w-72 lg:w-80 rounded-md shadow-md border-2 border-white transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10">
                <button className="rounded-full bg-white text-black py-3 px-7 font-serif text-lg font-bold hover:bg-green-100 transition-colors duration-300">
                  Main Menu
                </button>

                <button className="rounded-full bg-white text-black py-3 px-7 font-serif text-lg font-bold hover:bg-green-100 transition-colors duration-300">
                  Paddy's Lunch Menu
                </button>
              </div>

            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
