export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-start">

        {/* Location */}
        <div className="text-center sm:text-left">
          <div className="font-display text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">location</div>
          <p className="leading-snug text-sm sm:text-base md:text-lg">
            10971 N Military Trail<br />
            Palm Beach Gardens, FL<br />
            33410
          </p>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <div className="font-display text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">contact us</div>
          <p className="leading-snug text-sm sm:text-base md:text-lg">(561) 691-4366</p>
        </div>

        {/* Social */}
        {/* LEFT SOCIAL ICONS (Desktop Only) */}
        <div className="hidden md:flex gap-6 text-gray-50 text-2xl">

          {/* Yelp */}
          <a
            href="https://www.yelp.com/biz/YOUR-BUSINESS-NAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/photo/yelp1.png"
              className="h-7 w-7 rounded hover:scale-110 transition cursor-pointer"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/photo/instagram.png"
              className="h-7 w-7 rounded hover:scale-110 transition cursor-pointer"
            />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/fb.png"
              className="h-7 w-7 rounded hover:scale-110 transition cursor-pointer"
            />
          </a>

        </div>

     

      {/* Logo & Merch */}
      <div className="flex flex-col items-center sm:items-end text-center sm:text-right mt-4 sm:mt-0">
        <div className="font-display text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">paddy mac’s</div>
        <div className="text-xs sm:text-sm tracking-widest mb-2">IRISH RESTAURANT</div>
        <a
          href="#"
          className="bg-white text-black px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg mt-2 hover:bg-green-100 transition-colors duration-300"
        >
          Shop Our Merch
        </a>
      </div>

    </div>
    </footer >
  );
}
