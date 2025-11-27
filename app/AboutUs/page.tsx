import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import TeamMember from "../components/TeamMember";

export default function AboutUs() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* NAVBAR */}
      <NavBar />

      {/* HERO IMAGE (FULLY RESPONSIVE) */}
      <section
        className="
          flex flex-col items-center justify-center 
          min-h-[40vh] sm:min-h-[55vh] md:min-h-[75vh] lg:min-h-[85vh] 
          pt-24 sm:pt-28 md:pt-36 
          bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/photo/frontabu.jpg')" }}
      >
        <h1
          className="
            text-white font-serif text-center tracking-wide
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
            px-4"
        >
          About Us
        </h1>
      </section>

      {/* TEAM SECTION (FULLY RESPONSIVE GRID) */}
      <section className="w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TeamMember />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
