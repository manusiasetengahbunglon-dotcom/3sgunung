import React from "react";
import { motion } from "framer-motion";
import { Mountain, Shield, CloudSun, AlertCircle, Backpack } from "lucide-react";

const panduan = [
  {
    icon: <Backpack className="w-12 h-12 text-teal-300" />,
    title: "Peralatan Wajib Pendakian",
    content:
      "Tas carrier 40–60L, jaket tebal, sepatu tracking, jas hujan, tenda, matras, sleeping bag, headlamp, kompor, logistik, P3K, serta air minimal 2 liter per orang.",
  },
  {
    icon: <Mountain className="w-12 h-12 text-teal-300" />,
    title: "Persiapan Fisik Sebelum Mendaki",
    content:
      "Lakukan jogging 20–30 menit setiap hari, latihan naik turun tangga, pemanasan sebelum mendaki, dan istirahat cukup minimal 7 jam sebelum keberangkatan.",
  },
  {
    icon: <Shield className="w-12 h-12 text-teal-300" />,
    title: "Etika Mendaki & Safety",
    content:
      "Hormati sesama pendaki, jangan meninggalkan sampah, patuhi jalur resmi, berhenti jika hujan badai, dan selalu beri kabar ke keluarga serta basecamp sebelum naik.",
  },
  {
    icon: <CloudSun className="w-12 h-12 text-teal-300" />,
    title: "Membaca Cuaca di Gunung",
    content:
      "Awan gelap dari barat tanda hujan, kabut tebal tanda badai kecil, angin kencang berarti suhu menurun, dan hindari puncak saat petir mulai muncul.",
  },
  {
    icon: <AlertCircle className="w-12 h-12 text-teal-300" />,
    title: "Risiko & Penanganan Dasar",
    content:
      "Hipotermia: segera ganti pakaian basah, beri minuman hangat. Kram: lakukan peregangan. Dehidrasi: minum sedikit-sedikit. Patah tulang: jangan digerakkan.",
  },
];

export default function Panduan() {
  return (
    <section
      id="artikel"
      className="relative text-white px-8 md:px-16 py-24 bg-black/40 backdrop-blur-lg"
    >
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 drop-shadow-lg"
      >
        Panduan 
      </motion.h1>

      {/* GRID LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {panduan.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10 hover:bg-white/20 transition"
          >
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h2 className="text-xl font-bold text-center mb-3">{p.title}</h2>
            <p className="text-gray-200 text-center leading-relaxed">
              {p.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <p className="text-center text-gray-300 mt-16 text-sm">
        Panduan ini dibuat untuk membantu pendaki tetap aman, nyaman, dan siap menghadapi kondisi gunung apa pun.
      </p>
    </section>
  );
}
