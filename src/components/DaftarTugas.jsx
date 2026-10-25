import KartuTugas from "./KartuTugas";

function DaftarTugas() {
  return (
    <div className="daftar-container">
      <h3>Daftar Tugas</h3>
      <div className="daftar-list">
        <KartuTugas
          judul="Mengerjakan Tugas 6 React Dasar"
          mataKuliah="Perancangan Web"
          deadline="28 Oktober 2026"
          prioritas="Tinggi"
        />
        <KartuTugas
          judul="Membaca Materi Modul 7 AJAX"
          mataKuliah="Perancangan Web"
          deadline="30 Oktober 2026"
          prioritas="Sedang"
        />
      </div>
    </div>
  );
}

export default DaftarTugas;
