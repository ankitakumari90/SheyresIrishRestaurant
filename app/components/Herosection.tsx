export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[99vh] pt-36 bg-cover bg-center"
      style={{ backgroundImage: "url('/main-bar.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
        {/* Hero Image */}
        <img
          src="/Paddy+Mac's+(2).jpg"
          alt="Hero Image"
          className="w-[200px] md:w-[250px] lg:w-[650px] h-auto rounded-lg shadow-lg object-cover transition-all duration-500"
        />

        {/* Address / Text */}
        <div className="text-white text-sm md:text-lg lg:text-xl font-serif tracking-wide max-w-[90%] md:max-w-md lg:max-w-xl">
          10971 North Military Trail, Palm Beach Gardens, FL 33410
        </div>
      </div>
    </section>
  );
}
