import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import bgImage from "../assets/bg.jpg";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT SECTION DALAM HALAMAN
import Destinasi from "./Destinasi.jsx";
import Artikel from "./Panduan.jsx";
import Kontak from "./Kontak.jsx";
import Panduan from "./Panduan.jsx";

const mountains = [
  { name: "Gunung Slamet", video: "/slamet.mp4" },
  { name: "Gunung Sumbing", video: "/sumbing.mp4" },
  { name: "Gunung Sindoro", video: "/sindoro.mp4" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % mountains.length);
  const prev = () => setIndex((i) => (i - 1 + mountains.length) % mountains.length);

  const current = mountains[index];

  return (
    <div className="min-h-screen w-full text-white relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      <Navbar />

      {/* HERO */}
      <section id="home" className="relative pt-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">

          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center w-full md:w-1/2"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              3 S
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">
              Tiga gunung "Triple S" di Jawa Tengah adalah Gunung Slamet (tertinggi, 3.428 mdpl), Gunung Sumbing (3.371 mdpl), dan Gunung Sindoro (sekitar 3.153 mdpl), ketiganya sering disebut karena awalan 'S' dan lokasi berdekatan, menawarkan jalur pendakian populer dengan keindahan alam khas, terutama Sumbing dan Sindoro yang sering dijuluki "gunung kembar". Gunung-gunung ini populer di kalangan pendaki karena panorama dan tantangan jalur pendakiannya.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-xl">
              {mountains.map((m, i) => (
                <button
                  key={m.name}
                  onClick={() => setIndex(i)}
                  className={`transition-all ${
                    i === index
                      ? "text-white font-bold border-b-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* VIDEO */}
          <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.video}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <video
                  ref={videoRef}
                  src={current.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[380px] md:h-[500px] object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-black/60 to-transparent w-full">
              <h2 className="text-2xl font-bold">{current.name}</h2>
            </div>

            <div className="absolute bottom-6 right-6 flex gap-3">
              <button onClick={prev} className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30">←</button>
              <button onClick={next} className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30">→</button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION DESTINASI */}
      <section id="destinasi" className="mt-32">
        <Destinasi />
      </section>

      {/* SECTION ARTIKEL */}
      <section id="panduan" className="mt-32">
        <Panduan />
      </section>

      {/* SECTION KONTAK */}
      <section id="kontak" className="mt-32">
        <Kontak />
      </section>
    </div>
  );
}
