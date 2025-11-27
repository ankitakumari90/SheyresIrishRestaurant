export default function EventPromo() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/photo/Ham.jpg)", // Apni paper/menu bg image ka path dein
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay (optional for extra fade) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Centered Black Event Card */}
      <div className="relative z-10 bg-black w-full max-w-2xl mx-auto rounded-lg shadow-2xl flex flex-col items-center p-8 md:p-12">
        <img
          src="/Screenshot-2025-11-26-184341.jpg" // Yahan apni event/promo image lagayein
          alt="Cheers to 30 Years"
          className="w-full rounded-t-lg mb-0"
        />
        {/* Agar sirf image hai, toh text blocks ki zarurat nahi! */}
        {/* Agar upar likhna ho toh yahaan <h1> etc. dal sakte hain */}
      </div>
    </div>
  );
}
