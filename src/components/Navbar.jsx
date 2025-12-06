import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Destinasi", id: "destinasi" },
    { name: "Panduan", id: "panduan" },
    { name: "Kontak", id: "kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center relative">

        {/* LOGO (kiri) */}
        <a href="#home" className="flex items-center gap-3 absolute left-6">
          <img src="/logo3.png" className="w-12 h-12 object-cover" alt="logo" />
          <span className="text-white text-2xl font-bold tracking-wide">
            Mountnesia
          </span>
        </a>

        {/* MENU (TENGAH) */}
        <ul className="hidden md:flex gap-10 text-white font-semibold mx-auto">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                className="hover:text-teal-300 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER (kanan) */}
        <button
          className="md:hidden text-white absolute right-6"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="bg-black/70 text-white px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-teal-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
