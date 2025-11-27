import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function Gallery() {
  const images = [
    "/gallery/tempImageIxGx3K.jpg",
    "/gallery/tempImageX47L31.jpg",
    "/gallery/IMG_7104.jpg",
    "/gallery/IMG_5779.jpg",
    "/gallery/IMG_5774.jpg",
    "/gallery/IMG_5789.jpg",
    "/gallery/IMG_5799.jpg",
    "/gallery/tempImagewzq0mu.jpg",
    "/gallery/IMG_5802.jpg",
    "/gallery/IMG_5803.jpg",
    "/gallery/IMG_5805.jpg",
    "/gallery/IMG_5807.jpg",
    "/gallery/7FD14713-45F8-4BB9-AABE-E94CD56CBDA5.jpg",
    "/gallery/tempImageV6warZ.jpg",
    "/gallery/tempImageYCXbU8.jpg",
    "/gallery/tempImageCtU6lA.jpg",
    
    
    // add more images here
  ];

  return (
    <div className="w-full">
      <NavBar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] pt-24 sm:pt-28 md:pt-36 bg-black">
        <div className="text-white text-4xl sm:text-6xl md:text-8xl leading-none text-center tracking-wide px-4 font-[UnifrakturCook]">
          Photo Gallery
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-8 text-white font-[UnifrakturCook]">
          Take a look at some of our favorite shots of all things Paddy Mac’s
        </p>
      </section>

      {/* GALLER.Y GRID */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
