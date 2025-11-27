export default function ServingCountySection() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f4f6ea] via-[#e3e4d2] to-[#dde0c2] pb-16 px-4 md:px-8 lg:px-16">

      {/* Heading */}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[IrishGrover] text-green-900 text-center leading-tight drop-shadow-sm">
          proudly serving palm beach county
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[IrishGrover] text-green-900 text-center mt-2">
          FOR OVER 25 YEARS!
        </h2>
      </div>

      {/* Instagram prompt */}
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[IrishGrover] text-green-800 text-center mt-10 mb-7 underline underline-offset-4 sm:underline-offset-6 md:underline-offset-8 decoration-green-800">
        check out our instagram page
      </div>

      {/* Instagram image showcase */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 px-2 sm:px-4 mb-5">
        {[
          "/asset1.jpg",
          "/image-asset3.jpg",
          "/image-asset (2).jpg",
          "/image-asset-4.jpg",
        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Instagram ${idx + 1}`}
            className="h-48 sm:h-56 md:h-64 w-40 sm:w-48 md:w-56 lg:w-64 object-cover rounded-lg shadow-lg bg-[#f6eee2] transition-transform duration-500 hover:scale-105"
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 px-2 sm:px-4">
        {[
          "/image-asset (5).jpg",
          "/image-asset (6).jpg",
          "/image-asset (7).jpg",
          "/assest8.jpg",
        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Instagram ${idx + 5}`}
            className="h-48 sm:h-56 md:h-64 w-40 sm:w-48 md:w-56 lg:w-64 object-cover rounded-lg shadow-lg bg-[#f6eee2] transition-transform duration-500 hover:scale-105"
          />
        ))}
      </div>

    </div>
  );
}
