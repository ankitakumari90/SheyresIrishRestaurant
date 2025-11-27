export default function StorySection() {
  return (
    <section className="py-16 flex flex-col items-center text-white bg-black px-4 md:px-8 lg:px-16">
      {/* Title */}
      <h1 className="font-[UnifrakturCook] text-3xl sm:text-4xl md:text-5xl mb-2 text-center">
        OUR STORY
      </h1>

      <h2 className="font-[UnifrakturCook] text-lg sm:text-xl md:text-3xl mb-8 lowercase text-center text-gray-300">
        a unique irish experience
      </h2>

      {/* Story Text */}
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl text-center space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg font-serif leading-relaxed text-gray-100 transition-all duration-500">
        <p>
          Welcome to Paddy Mac’s Irish Restaurant! Step inside to feel the warmth from all of our staff,
        </p>
        <p>
          many of whom hail from the Emerald Isle itself. Paddy Mac’s was established in December of 1995,
        </p>
        <p>
          and almost thirty years later it still serves many tried and true Irish recipes every day to make your experience exceptional.
        </p>
        <p>
          From lunch to dinner, we have many traditional Irish dishes served with our homemade Irish scones and perfectly
        </p>
        <p>
          poured Guinness. Every Friday and Saturday night we have live local bands who fill our house with exciting music.
        </p>
        <p>
          We look forward to welcoming you into our family here at Paddy Mac’s… and you are bound to leave with a brogue!
        </p>
      </div>
    </section>
  );
}
