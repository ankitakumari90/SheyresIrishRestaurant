export default function TripleInfoSection() {
  return (
    <div className="w-full min-h-screen bg-[#e7e7cd] px-4 md:px-8 lg:px-16 py-16 flex flex-col items-center">

      {/* Top Cards */}
      <div className="flex flex-col md:flex-row md:justify-center gap-6 sm:gap-8 md:gap-16 my-8">
        {[
          { src: "/1st.jpg", title: "hours & location" },
          { src: "/2nd.jpg", title: "local live music" },
          { src: "/3rd.jpg", title: "private events" },
        ].map((card, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={card.src}
              alt={card.title}
              className="w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 object-cover rounded-full border-4 border-[#d7d7b1] shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="mt-4 text-xl sm:text-2xl md:text-3xl text-[#48632b] font-[IrishGrover] text-center capitalize">
              {card.title}
            </div>
          </div>
        ))}
      </div>

      {/* Info Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-5 text-[#48632b] font-[IrishGrover] text-center md:text-left">
            hours & location
          </div>
          <div className="font-serif text-sm sm:text-base md:text-lg text-center md:text-left">
            <span className="font-bold">Sunday: </span>CLOSED<br />
            <span className="font-bold">Monday: </span>CLOSED<br />
            <span className="font-bold">Tuesday to Thursday: </span>11:30 a.m. to 12 a.m.<br />
            <span className="font-bold">Friday: </span>11:30 a.m. to 1 a.m.<br />
            <span className="font-bold">Saturday: </span>3 p.m. to 1 a.m.
          </div>
          <button className="bg-[#41520c] text-white text-base sm:text-lg mt-6 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-[#556e0f] transition-colors duration-300">
            Contact Us
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-5 text-[#48632b] font-[IrishGrover] text-center md:text-left">
            local live music
          </div>
          <div className="font-serif text-sm sm:text-base md:text-lg mb-6 text-center md:text-left">
            Join us every weekend for live music on Friday and Saturday nights from 9 p.m. to 11 p.m.  
            We feature local bands that have become crowd favorites and bring an upbeat environment to our house!
          </div>
          <button className="bg-[#41520c] text-white text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-[#556e0f] transition-colors duration-300">
            Event Calendar
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-5 text-[#48632b] font-[IrishGrover] text-center md:text-left">
            private events
          </div>
          <div className="font-serif text-sm sm:text-base md:text-lg mb-6 text-center md:text-left">
            We are happy to host private events &amp; also provide catering.  
            Our kitchen stays true to authentic Irish cuisine while maintaining a creative menu of fresh recipes.
          </div>
          <button className="bg-[#41520c] text-white text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-[#556e0f] transition-colors duration-300">
            Catering
          </button>
        </div>
      </div>

    </div>
  );
}
