import NavBar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* NAVBAR ALWAYS ON TOP */}
      <NavBar />

      {/* BACKGROUND IMAGE SECTION */}
      <section
        className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh] pt-28 md:pt-36 bg-cover bg-center"
        style={{ backgroundImage: "url('/photo/frontabu.jpg')" }}
      >
        <div className="text-white text-4xl sm:text-6xl md:text-8xl font-serif text-center tracking-wide px-4">
          Contact Us
        </div>
      </section>

      {/* CONTACT SECTION */}
      <div className="w-full bg-white flex flex-col items-center py-16 px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-8 md:gap-12">
          
          {/* LEFT SIDE: Text + Map */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-none text-[#3b5b16] font-[UnifrakturCook]">
              hello
            </h1>

            <div className="space-y-6 text-[#3b5b16] font-serif text-base sm:text-lg">
              <div>
                <div className="font-bold mb-1">Phone:</div>
                <div>(561) 691-4366</div>
              </div>

              <div>
                <div className="font-bold mb-1">Email:</div>
                <div>hughjacksonpaddymacs@gmail.com</div>
              </div>

              <div>
                <div className="font-bold mb-1">Address:</div>
                <div>10971 North Military Trail</div>
                <div>Palm Beach Gardens, FL</div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 md:h-80 border border-gray-300 shadow-sm">
              <iframe
                title="Paddy Mac's Location"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.489978437288!2d-80.11719102525405!3d26.823881576680397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df2ab6b75d27af%3A0x63e0d7d0945bc3bb!2sPaddy%20Mac's%20Irish%20Restaurant!5e0!3m2!1sen!2sin!4v1706459234567!5m2!1sen!2sin`}
              />
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <form className="space-y-6 w-full">
            {/* Name */}
            <div>
              <label className="block font-serif text-lg mb-1">
                Name <span className="text-sm">(required)</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm mb-1">First Name</div>
                  <input
                    className="w-full border border-gray-300 h-12 px-3 focus:outline-none focus:ring-1 focus:ring-[#3b5b16] rounded-md"
                  />
                </div>
                <div>
                  <div className="text-sm mb-1">Last Name</div>
                  <input
                    className="w-full border border-gray-300 h-12 px-3 focus:outline-none focus:ring-1 focus:ring-[#3b5b16] rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-serif text-lg mb-1">
                Email <span className="text-sm">(required)</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 h-12 px-3 focus:outline-none focus:ring-1 focus:ring-[#3b5b16] rounded-md"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-serif text-lg mb-1">
                Message <span className="text-sm">(required)</span>
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#3b5b16] rounded-md"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-serif text-lg mb-1">Phone</label>
              <input
                className="w-full border border-gray-300 h-12 px-3 focus:outline-none focus:ring-1 focus:ring-[#3b5b16] rounded-md"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full md:w-auto bg-[#3b5b16] text-white font-serif text-lg px-10 py-3 rounded-full hover:bg-[#27400f] transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
