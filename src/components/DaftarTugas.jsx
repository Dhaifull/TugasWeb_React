import { useState } from "react";
import KartuTugas from "./KartuTugas";

function DaftarTugas({ daftarTugas, kategori: semuaKategori, onHapus, onDetail }) {
  const [pencarian, setPencarian] = useState("");
  const [filterKategori, setFilterKategori] = useState("");
  const [urutanWaktu, setUrutanWaktu] = useState("terdekat");
  const kategoriJadwal = [...new Set([...semuaKategori, ...daftarTugas.map((jadwal) => jadwal.kategori)])].sort((a, b) => a.localeCompare(b, "id-ID"));
  const jadwalUrut = [...daftarTugas]
    .filter((jadwal) => jadwal.nama.toLocaleLowerCase("id-ID").includes(pencarian.trim().toLocaleLowerCase("id-ID")))
    .filter((jadwal) => !filterKategori || jadwal.kategori === filterKategori)
    .sort((a, b) => {
      const perbandingan = `${a.tanggal} ${a.jam}`.localeCompare(`${b.tanggal} ${b.jam}`);
      return urutanWaktu === "terdekat" ? perbandingan : -perbandingan;
    });

  return (
    <section className="daftar-container">
      <h3>Daftar Jadwal</h3>
      <div className="filter-controls">
        <div className="form-group search-group">
          <label htmlFor="cari-jadwal">Cari Nama Jadwal</label>
          <input
            id="cari-jadwal"
            type="search"
            placeholder="Ketik nama jadwal..."
            value={pencarian}
            onChange={(e) => setPencarian(e.target.value)}
          />
        </div>
        <div className="filter-selectors">
          <div className="form-group search-group">
            <label htmlFor="filter-kategori">Filter Kategori</label>
            <select id="filter-kategori" value={filterKategori} onChange={(e) => setFilterKategori(e.target.value)}>
              <option value="">Semua Kategori</option>
              {kategoriJadwal.map((kategori) => <option key={kategori} value={kategori}>{kategori}</option>)}
            </select>
          </div>
          <div className="form-group search-group">
            <label htmlFor="urutan-waktu">Urutkan Waktu</label>
            <select id="urutan-waktu" value={urutanWaktu} onChange={(e) => setUrutanWaktu(e.target.value)}>
              <option value="terdekat">Waktu Terdekat</option>
              <option value="terlama">Waktu Terlama</option>
            </select>
          </div>
        </div>
      </div>
      {jadwalUrut.length === 0 ? (
        <p className="pesan-kosong">
          {daftarTugas.length === 0 ? "Belum ada jadwal. Tambahkan jadwal melalui formulir." : "Jadwal dengan nama tersebut tidak ditemukan."}
        </p>
      ) : (
        <div className="daftar-list">
          {jadwalUrut.map((jadwal) => <KartuTugas key={jadwal.id} jadwal={jadwal} onHapus={onHapus} onDetail={onDetail} />)}
        </div>
      )}
    </section>
  );
}

export default DaftarTugas;
