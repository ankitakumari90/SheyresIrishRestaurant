import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function HappyHour() {
  return (
    <div>
      {/* NAVBAR ALWAYS ON TOP */}
      <NavBar />

      {/* BACKGROUND IMAGE SECTION */}
      <section
        className="flex flex-col items-center justify-center min-h-[80vh] pt-36 bg-cover bg-center"
        style={{ backgroundImage: "url('/photo/table.jpg')" }}
      >
        <div className="text-white text-8xl font-serif text-center tracking-wider">
          Sheyres Hppy Hour
        </div>
        <p className="text-2xl text-blue-50">
         Specials sure to bring you a taste of the new Irish Life
        </p>
      </section>

      {/* MAIN CONTAINER */}
      <div className="relative w-full min-h-screen bg-[#f8f6ef] flex flex-col items-center py-8 px-2 overflow-hidden">

        {/* FIRST (HAM) IMAGE ZOOMED */}
        <img
          src="/photo/Ham.jpg"
          alt="Menu Image"
          className="
            w-full
            h-[120vh]
            object-cover
            rounded-lg
            shadow-lg
            transform scale-150
          "
          style={{
            objectPosition: "bottom" 
          }}
        />

        {/* SECOND IMAGE OVERLAY */}
        <img
          src="/photo/hwm.jpg" // yaha second image
          alt="Overlay Menu"
          className="
            absolute 
            top-10 
            left-1/2 
            transform -translate-x-1/2 
            w-[70%] md:w-[50%] 
            rounded-lg 
            shadow-2xl
          "
        />
      </div>

      <Footer />
    </div>
  );
}
