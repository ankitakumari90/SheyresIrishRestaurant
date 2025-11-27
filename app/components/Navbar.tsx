"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import DropdownMenu from "./DropDownMenu";

export default function NavBar() {
  const [hideNav, setHideNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 40);

      if (currentScroll > lastScroll && currentScroll > 80) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      setLastScroll(currentScroll);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* TOP CENTER HOTEL NAME */}
      <div className="w-full flex justify-center py-4 z-40 bg-blur">
        <h1 className="text-purple-500  text-xl md:text-3xl font-serif drop-shadow-lg ">
          Sheyres Irish Restaurant
        </h1>
      </div>

      {/* NAVBAR */}
      <nav
        className={`
          fixed top-14 left-0 w-full z-50 transition-all duration-300
          flex items-center justify-between 
          px-5 md:px-14 py-4

          ${hideNav ? "-top-20 opacity-0" : "top-14 opacity-100"}

          ${isScrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}
      >

        {/* LEFT SOCIAL ICONS (Desktop Only) */}
        <div className="hidden md:flex gap-6 text-gray-50 text-2xl">

          {/* Yelp */}
          <a
            href="https://www.yelp.com/biz/YOUR-BUSINESS-NAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/photo/yelp1.png"
              className="h-7 w-7 rounded hover:scale-110 transition cursor-pointer"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/photo/instagram.png"
              className="h-7 w-7 rounded hover:scale-110 transition cursor-pointer"
            />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/fb.png"
              className="h-7 w-7 rounded hover:scale-110 transition cursor-pointer"
            />
          </a>

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex gap-10 items-center text-lg font-serif text-white">

          <Link href="/" className={`${pathname === "/" ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-300"}`}>
            Home
          </Link>

          <Link href="/AboutUs" className={`${pathname === "/AboutUs" ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-300"}`}>
            About Us
          </Link>

          <DropdownMenu />

          <Link href="/Gallery" className={`${pathname === "/Gallery" ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-300"}`}>
            Photo Gallery
          </Link>

          <Link href="/ContactUs" className={`${pathname === "/ContactUs" ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-300"}`}>
            Contact Us
          </Link>
        </div>

        {/* RIGHT SIDE CALL BUTTON (Desktop) */}
        <Link href="/ContactUs" className="hidden md:block">
          <button className="bg-white text-black rounded-full px-6 py-2 font-serif text-lg font-semibold hover:bg-green-100">
            Call Us
          </button>
        </Link>

      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {mobileOpen && (
        <div className="md:hidden fixed top-32 left-0 w-full bg-black/90 backdrop-blur-lg text-white flex flex-col items-center py-6 gap-6 text-xl font-serif z-40">

          <Link href="/" onClick={() => setMobileOpen(false)}
            className={`${pathname === "/" ? "text-yellow-300" : ""}`}>
            Home
          </Link>

          <Link href="/AboutUs" onClick={() => setMobileOpen(false)}
            className={`${pathname === "/AboutUs" ? "text-yellow-300" : ""}`}>
            About Us
          </Link>

          <Link href="/Menu" onClick={() => setMobileOpen(false)}>
            Menu
          </Link>

          <Link href="/Gallery" onClick={() => setMobileOpen(false)}
            className={`${pathname === "/Gallery" ? "text-yellow-300" : ""}`}>
            Photo Gallery
          </Link>

          <Link href="/ContactUs" onClick={() => setMobileOpen(false)}
            className={`${pathname === "/ContactUs" ? "text-yellow-300" : ""}`}>
            Contact Us
          </Link>

          {/* MOBILE CALL BUTTON */}
          <a href="/ContactUs">
            <button className="bg-white text-black px-6 py-2 rounded-full font-serif">
              Call Us
            </button>
          </a>
        </div>
      )}
    </>
  );
}
