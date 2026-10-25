import { useState } from "react";
import Header from "./components/Header";
import RingkasanTugas from "./components/RingkasanTugas";
import FormTugas from "./components/FormTugas";
import DaftarTugas from "./components/DaftarTugas";
import "./App.css";

function App() {
  const [daftarTugas, setDaftarTugas] = useState([
    {
      id: 1,
      judul: "Mengerjakan Tugas 6 React Dasar",
      mataKuliah: "Perancangan Web",
      deadline: "28 Oktober 2026",
      prioritas: "Tinggi",
    },
    {
      id: 2,
      judul: "Membaca Materi Modul 7 AJAX",
      mataKuliah: "Perancangan Web",
      deadline: "30 Oktober 2026",
      prioritas: "Sedang",
    },
    {
      id: 3,
      judul: "Membuat Desain ERD Database",
      mataKuliah: "Basis Data",
      deadline: "02 November 2026",
      prioritas: "Rendah",
    },
  ]);

  function handleTambahTugas(tugasBaru) {
    setDaftarTugas([...daftarTugas, tugasBaru]);
  }

  return (
    <div className="app-container">
      <Header />
      <RingkasanTugas totalTugas={daftarTugas.length} />
      <main className="main-content">
        <FormTugas onTambahTugas={handleTambahTugas} />
        <DaftarTugas daftarTugas={daftarTugas} />
      </main>
    </div>
  );
}

export default App;
