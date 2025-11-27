import Footer from "./Footer";


export default function TeamMember() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center pt-10 pb-20 px-4">

      {/* HEADER */}
      <div className="w-full text-[#49652c] rounded-t-xl flex justify-center py-3 relative">
        <span className="text-xl md:text-2xl font-serif font-semibold">
          our commitment to the Irish experience 
        </span>

        {/* MOBILE MENU ICON */}
        <span className="absolute right-6 top-4 block md:hidden">
          <div className="w-7 h-1 bg-white mb-1 rounded"></div>
          <div className="w-7 h-1 bg-white mb-1 rounded"></div>
          <div className="w-7 h-1 bg-white rounded"></div>
        </span>
      </div>

      {/* SLOGAN */}
      <div className="mt-8 text-[#49652c] font-[IrishGrover] text-3xl md:text-5xl text-center leading-tight tracking-wide">
       paddy mac’s has been proudly serving warm service,  <br/>
         premium drinks and authentic Irish cuisine to <b/>
        <span >palm beach county for over 25 years </span>
       
      </div>

      {/* IMAGE */}
      <div className="flex justify-center w-full py-40">
        <img
          src="/photo/Hugh.jpg"
          alt="Hugh Jackson"
          className="w-200 h-200 md:w-200 md:h-200 rounded-full object-cover border-4 border-[#ede4d2] shadow-lg"
        />
      </div>

      {/* NAME + ROLE */}
      <div className="flex flex-col items-center mt-2">
        <span className="text-xl md:text-3xl font-[IrishGrover] text-black">
          hugh jackson
        </span>
        <span className="text-sm md:text-lg font-serif font-bold tracking-wide">
          PROPRIETOR
        </span>
      </div>

      {/* BIO TEXT */}
      <div className="
        mt-6 text-black font-serif leading-relaxed text-center
        text-xs md:text-base
        max-w-[640px]
      ">
        Born in Cork City, Ireland, Hugh has spent years in the
        food and beverage industry throughout Ireland, London, and
        America. Some of his favorite experiences include working
        at Youngs Brewery and Fast Eddies. After coming to the U.S.
        and spending a short stint in construction, Hugh discovered
        Paddy Mac’s in 1996. Hugh worked his way up from bartender
        to partner in 2013 and then became the owner in 2015, sole
        proprietor in 2019. He has continued his commitment toward
        warm service, premium drinks and authentic Irish cuisine ever since.
      </div>
      
    </div>
  );
}
