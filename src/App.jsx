import { useEffect, useState } from "react";
import Header from "./components/Header";
import RingkasanTugas from "./components/RingkasanTugas";
import FormTugas from "./components/FormTugas";
import DaftarTugas from "./components/DaftarTugas";
import "./App.css";

const jadwalContoh = [
  { id: 1, nama: "Ulang Tahun", tanggal: "2026-11-05", jam: "19:00", kategori: "Pribadi", catatan: "Acara ulang tahun keluarga" },
  { id: 2, nama: "Kuliah Pemrograman Web", tanggal: "2026-11-06", jam: "08:00", kategori: "Kuliah", catatan: "Belajar dengan giat" },
  { id: 3, nama: "Pengerjaan Tugas Besar", tanggal: "2026-11-07", jam: "13:00", kategori: "Tugas", catatan: "Mengerjakan tugas besar" },
];
const kategoriBawaan = ["Kuliah", "Tugas", "Pribadi"];

function App() {
  const [daftarTugas, setDaftarTugas] = useState(() => {
    try {
      const tersimpan = localStorage.getItem("dailyflow-jadwal");
      return tersimpan ? JSON.parse(tersimpan) : jadwalContoh;
    } catch {
      return jadwalContoh;
    }
  });
  const [jadwalDetail, setJadwalDetail] = useState(null);
  const [kategoriTambahan, setKategoriTambahan] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dailyflow-kategori")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("dailyflow-jadwal", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  useEffect(() => {
    localStorage.setItem("dailyflow-kategori", JSON.stringify(kategoriTambahan));
  }, [kategoriTambahan]);

  function handleTambahTugas(jadwalBaru) {
    setDaftarTugas((jadwal) => [...jadwal, jadwalBaru]);
  }

  function handleTambahKategori(namaKategori) {
    const namaBersih = namaKategori.trim();
    if (!namaBersih || [...kategoriBawaan, ...kategoriTambahan].some((kategori) => kategori.toLocaleLowerCase("id-ID") === namaBersih.toLocaleLowerCase("id-ID"))) {
      return false;
    }
    setKategoriTambahan((kategori) => [...kategori, namaBersih]);
    return true;
  }

  function handleHapusJadwal(id) {
    setDaftarTugas((jadwal) => jadwal.filter((item) => item.id !== id));
    if (jadwalDetail?.id === id) setJadwalDetail(null);
  }

  const dateDetail = jadwalDetail && new Date(`${jadwalDetail.tanggal}T00:00:00`).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="app-container">
      <Header />
      <RingkasanTugas totalTugas={daftarTugas.length} />
      <main className="main-content">
        <FormTugas onTambahTugas={handleTambahTugas} kategori={[...kategoriBawaan, ...kategoriTambahan]} onTambahKategori={handleTambahKategori} />
        <DaftarTugas daftarTugas={daftarTugas} kategori={ [...kategoriBawaan, ...kategoriTambahan] } onHapus={handleHapusJadwal} onDetail={setJadwalDetail} />
      </main>
      {jadwalDetail && (
        <div className="modal-backdrop" onClick={() => setJadwalDetail(null)}>
          <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title" onClick={(e) => e.stopPropagation()}>
            <h3 id="detail-title">Detail Jadwal</h3>
            <dl>
              <div><dt>Nama Jadwal</dt><dd>{jadwalDetail.nama}</dd></div>
              <div><dt>Tanggal</dt><dd>{dateDetail}</dd></div>
              <div><dt>Jam</dt><dd>{jadwalDetail.jam}</dd></div>
              <div><dt>Kategori</dt><dd>{jadwalDetail.kategori}</dd></div>
              <div><dt>Catatan</dt><dd>{jadwalDetail.catatan || "Tidak ada catatan"}</dd></div>
            </dl>
            <button type="button" className="btn-detail" onClick={() => setJadwalDetail(null)}>Tutup</button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
