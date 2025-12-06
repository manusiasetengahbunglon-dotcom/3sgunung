import { Mail, Phone, MapPin } from "lucide-react";

export default function Kontak() {
  return (
    <section
      id="kontak"
      className="w-full text-white py-24 
      bg-black/40 backdrop-blur-xl border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
        
        {/* SUBTITLE */}
        <p className="uppercase tracking-widest text-gray-400 text-sm mb-2">
          Hubungi Kami
        </p>

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-14 drop-shadow-lg">
          Kontak
        </h2>

        {/* 3 GRID CARD */}
        <div className="grid md:grid-cols-3 gap-10">
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 
          shadow-lg hover:bg-white/20 transition">
            <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="text-gray-300">mountnesia.support@gmail.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 
          shadow-lg hover:bg-white/20 transition">
            <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="font-bold text-xl mb-2">Telepon</h3>
            <p className="text-gray-300">+62 821-4567-8899</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 
          shadow-lg hover:bg-white/20 transition">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="font-bold text-xl mb-2">Lokasi</h3>
            <p className="text-gray-300">Kledung Pass, Jawa Tengah</p>
          </div>

        </div>

        {/* FOOTER */}
        <p className="mt-16 text-gray-400 text-sm">
          © 2024 Mountnesia — Semua Hak Dilindungi
        </p>
      </div>
    </section>
  );
}
