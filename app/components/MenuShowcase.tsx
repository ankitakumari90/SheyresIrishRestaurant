export default function MenuShowcase() {
  return (
    <section
      className="flex flex-col items-center justify-center py-16 px-4"
      style={{
        backgroundImage: "url('/menu-paper-bg.jpg')", // Paper menu bg photo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <h2 className="font-[UnifrakturCook] text-4xl text-white mb-2 text-center drop-shadow-lg">
        host a holiday party at paddy mac’s!
      </h2>
      <div className="text-white mb-5 underline underline-offset-2 tracking-wide cursor-pointer text-lg font-serif">
        Catering and Events
      </div>
      <div className="flex justify-center gap-12 items-start flex-wrap">
        <img
          src="1.jpg"
          alt="Menu 1"
          className="w-72 rounded-md shadow-md border-2 border-white"
        />
        <img
          src="2.jpg"
          alt="Menu 2"
          className="w-72 rounded-md shadow-md border-2 border-white"
        />
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <button className="rounded-full bg-white text-black py-3 px-7 font-serif text-lg font-bold hover:bg-green-100">
          Main Menu
        </button>
        <button className="rounded-full bg-white text-black py-3 px-7 font-serif text-lg font-bold hover:bg-green-100">
          Paddy's Lunch Menu
        </button>
      </div>
    </section>
  );
}
