import React, { useState } from "react";
import { motion } from "framer-motion";

const destinasi = [
  {
    nama: "Gunung Slamet",
    deskripsi:
      "Gunung Slamet gunung tertinggi kedua di Jawa (setelah Semeru) dan tertinggi di Jawa Tengah, dijuluki Kunci Pulau Jawa karena posisinya di tengah, dikenal punya suhu paling dingin di Jawa, hingga mitos bahwa namanya berarti selamat dan dipercaya melindungi Jawa dari letusan dahsyat. Gunung ini juga aktif secara vulkanik, punya banyak jalur pendakian (Bambangan, Baturraden, dll.), serta dijaga oleh legenda makhluk halus dan ritual adat seperti Ruwat Bumi. obat Pesona pastinya sudah tidak asing dengan Candi Borobudur. Terletak di Kabupaten Magelang, Jawa Tengah, candi yang sangat megah dan rupawan ini telah dikenal oleh wisatawan lokal maupun mancanegara sebagai kuil Buddha terbesar di dunia.",
    img: "/slamet.jpg",
  },
  {
    nama: "Gunung Sumbing",
    deskripsi:
      "Gunung Sumbing punya banyak fakta unik: ia adalah gunung tertinggi ketiga di Jawa, dijuluki kembaran Gunung Sindoro karena berhadapan langsung dan dipisahkan jalan provinsi Kledung Pass, punya puncak berlapis (Buntu, Sejati, Rajawali) dan kawah megah Segoro Banjaran, serta jalur pendakian beragam dengan mitos pasar gaib dan aura mistis kuat. Uniknya, namanya berasal dari kata sam (air) dan bing (asin) karena ada sumber air panas asin di lerengnya, dan sering disebut Gunung Sumbing Jambi karena ada juga gunung Sumbing lain di Jambi. ering disebut sebagai 'Africa van Java', Baluran menawarkan padang savana yang luas, lengkap dengan fauna seperti banteng dan rusa yang berkeliaran bebas.",
    img: "/sumbing.jpg",
  },
  {
    nama: "Gunung Sindoro",
    deskripsi:
      "Gunung Sindoro punya banyak fakta menarik: namanya berasal dari kata Sansekerta Sundara (indah), dijuluki gunung kembar bersama Sumbing, jadi tempat kelahiran Sultan Hamengkubuwono II, punya Pasar Setan mistis, serta jadi tempat rumah bunga Edelweiss Jawa yang wangi, dan pernah menjadi tempat peradaban kuno Mataram Kuno. Ada juga mitos tentang bidadari yang membawa rezeki dan kabut hitam (Pedhut) yang bikin pendaki tersesat.  ikonik dengan lautan pasir yang luas. Tempat terbaik menikmati sunrise yang dramatis dan panorama gunung berapi aktif.",
    img: "/sindoro.jpg",
  },
];

const hargaGunung = {
  "Gunung Slamet": 350000,
  "Gunung Sumbing": 300000,
  "Gunung Sindoro": 320000,
};

export default function Destinasi() {
  const [showBooking, setShowBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jumlah, setJumlah] = useState(1);
  const [tanggal, setTanggal] = useState("");
  const [pilihanGunung, setPilihanGunung] = useState("");

  const totalHarga =
    pilihanGunung && jumlah
      ? hargaGunung[pilihanGunung] * jumlah
      : 0;

  const handleBooking = () => {
    if (!nama || !alamat || !jumlah || !tanggal || !pilihanGunung) {
      alert("Harap lengkapi semua data booking!");
      return;
    }

    // Tutup form booking
    setShowBooking(false);

    // Tampilkan popup sukses
    setTimeout(() => {
      setShowSuccess(true);
    }, 300);
  };

  return (
    <>
      {/* SECTION DESTINASI */}
      <section className="relative text-white px-8 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* TEKS KIRI */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-widest text-gray-300 mb-2 text-sm">
              Spotlight
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Mountnesia
            </h1>

            <p className="text-gray-300 max-w-lg mb-8">
              Jangan mati dulu ya sebelum ke sini ...
            </p>

            <button
              onClick={() => setShowBooking(true)}
              className="px-6 py-3 border border-white/70 rounded-lg hover:bg-white/20 transition"
            >
              Booking Pendakian
            </button>
          </motion.div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          >
            {destinasi.map((d, i) => (
              <div
                key={i}
                className="min-w-[280px] md:min-w-[340px] bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
              >
                <img src={d.img} className="h-56 w-full object-cover" />

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{d.nama}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {d.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* POPUP BOOKING */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-6">
          <div className="bg-white text-black rounded-xl shadow-xl w-full max-w-lg p-6 relative">

            <h2 className="text-2xl font-bold mb-4 text-center">
              Form Booking Pendakian
            </h2>

            <div className="flex flex-col gap-3">

              <input type="text" placeholder="Nama lengkap"
                className="border p-2 rounded"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />

              <input type="text" placeholder="Alamat lengkap"
                className="border p-2 rounded"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />

              <input type="number" placeholder="Jumlah orang"
                className="border p-2 rounded"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
              />

              <input type="date"
                className="border p-2 rounded"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
              />

              <select
                className="border p-2 rounded"
                value={pilihanGunung}
                onChange={(e) => setPilihanGunung(e.target.value)}
              >
                <option value="">Pilih Gunung</option>
                <option>Gunung Slamet</option>
                <option>Gunung Sumbing</option>
                <option>Gunung Sindoro</option>
              </select>

              {/* Harga muncul setelah pilih gunung */}
              {pilihanGunung && (
                <>
                  <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                    <h3 className="font-semibold mb-2">💰 Harga</h3>
                    <p>
                      Harga pendakian <b>{pilihanGunung}</b> :
                      <span className="font-bold text-green-700">
                        {" "}Rp {hargaGunung[pilihanGunung].toLocaleString("id-ID")}
                      </span>
                    </p>

                    <p className="mt-1">
                      Total untuk {jumlah} orang:
                      <b className="text-green-700"> Rp {totalHarga.toLocaleString("id-ID")}</b>
                    </p>
                  </div>

                  <div className="mt-3 p-3 bg-gray-100 rounded-lg">
                    <h3 className="font-semibold mb-2">💳 Pembayaran</h3>
                    <p>Transfer via <b>BCA</b></p>
                    <p>No. Rekening: <b>84099200141</b></p>
                    <p>a/n: <b>MOUNTNESIA</b></p>
                  </div>
                </>
              )}

              <button
                className="mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
                onClick={handleBooking}
              >
                Kirim Booking
              </button>

              <button
                className="mt-2 text-center text-sm text-red-500"
                onClick={() => setShowBooking(false)}
              >
                Tutup
              </button>

            </div>
          </div>
        </div>
      )}

      {/* POPUP SUKSES */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-6">
          <div className="bg-white text-black rounded-xl shadow-xl w-full max-w-md p-6 text-center">

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              ✔ Booking Berhasil!
            </h2>

            <p className="text-gray-700 mb-4">
              Terima kasih, <b>{nama}</b>!  
              Tiket pendakian kamu sudah dibuat.
            </p>

            {/* Tiket Dummy */}
            <div className="bg-gray-100 p-4 rounded-lg text-left shadow">
              <p><b>Nama:</b> {nama}</p>
              <p><b>Gunung:</b> {pilihanGunung}</p>
              <p><b>Tanggal:</b> {tanggal}</p>
              <p><b>Jumlah orang:</b> {jumlah}</p>
              <p><b>Total bayar:</b> Rp {totalHarga.toLocaleString("id-ID")}</p>
              <p className="mt-2 text-xs text-gray-600">
                *Tiket dummy — belum valid untuk pendakian resmi
              </p>
            </div>

            <button
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Download Tiket
            </button>

            <button
              className="mt-3 text-red-500"
              onClick={() => setShowSuccess(false)}
            >
              Tutup
            </button>

          </div>
        </div>
      )}
    </>
  );
}
