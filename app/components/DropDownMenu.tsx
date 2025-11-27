import React from "react";
 import Link from "next/link";

export default function DropdownMenu() {
  return (
   

<div className="relative group">
  <button className="text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
    Menus
  </button>

  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    <div className="py-1">
      <Link href="/MainMenu" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Main Menu
      </Link>
      <Link href="/LunchMenu" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Sheyres's Lunch Menu
      </Link>
      <Link href="/HappyHour" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Happy Hour
      </Link>
    </div>
  </div>
</div>
    );  
}