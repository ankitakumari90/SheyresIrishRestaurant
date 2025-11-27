import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function LunchMenu() { 
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
          Sheyres Menu
           
        </div>
        <p className=" text-2xl text-blue-50 ">Proudly serving genuine Irish cuisine with tasty and fresh recipes daily</p>
      </section>

      {/* Menu Images Section */}
      <div className="min-h-screen w-full bg-[#f8f6ef] flex flex-col items-center py-8 px-2">
        
          {/* Dusri menu image (right) */}
          <img
            src="/photo/Summer.jpg"
            alt="Paddy Mac's Menu 2"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-contain"
          />
        </div>
       
   
       <Footer />
    </div>
  );
}
