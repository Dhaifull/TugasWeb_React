import { useState } from "react";

function FormTugas({ onTambahTugas, kategori: daftarKategori, onTambahKategori }) {
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [kategori, setKategori] = useState("");
  const [catatan, setCatatan] = useState("");
  const [tambahKategoriTerbuka, setTambahKategoriTerbuka] = useState(false);
  const [kategoriBaru, setKategoriBaru] = useState("");
  const [pesanKategori, setPesanKategori] = useState("");

  function simpanKategori() {
    const namaKategori = kategoriBaru.trim();
    if (!namaKategori) {
      setPesanKategori("Masukkan nama kategori.");
      return;
    }
    if (!onTambahKategori(namaKategori)) {
      setPesanKategori("Kategori sudah ada.");
      return;
    }
    setKategori(namaKategori);
    setKategoriBaru("");
    setPesanKategori("");
    setTambahKategoriTerbuka(false);
  }

  function handlePilihKategori(e) {
    if (e.target.value === "__tambah_kategori__") {
      setKategori("");
      setTambahKategoriTerbuka(true);
      setPesanKategori("");
      return;
    }
    setKategori(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTambahTugas({ id: Date.now(), nama: nama.trim(), tanggal, jam, kategori, catatan: catatan.trim() });
    setNama("");
    setTanggal("");
    setJam("");
    setKategori("");
    setCatatan("");
  }

  return (
    <section className="form-container">
      <h3>Tambah Jadwal</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Nama Jadwal</label>
          <input id="nama" type="text" placeholder="Contoh: Kuliah Pemrograman Web" value={nama} onChange={(e) => setNama(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="tanggal">Tanggal</label>
          <input id="tanggal" type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="jam">Jam</label>
          <input id="jam" type="time" value={jam} onChange={(e) => setJam(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="kategori">Kategori</label>
          <select id="kategori" value={kategori} onChange={handlePilihKategori} required>
            <option value="" disabled>-- Pilih Kategori --</option>
            {daftarKategori.map((item) => <option key={item} value={item}>{item}</option>)}
            <option value="__tambah_kategori__">＋ Tambah kategori...</option>
          </select>
          {tambahKategoriTerbuka && (
            <div className="kategori-baru">
              <input aria-label="Nama kategori baru" placeholder="Nama kategori baru" value={kategoriBaru} onChange={(e) => { setKategoriBaru(e.target.value); setPesanKategori(""); }} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); simpanKategori(); } }} />
              <button type="button" className="btn-simpan-kategori" onClick={simpanKategori}>Simpan</button>
              <button type="button" className="btn-batal-kategori" onClick={() => { setTambahKategoriTerbuka(false); setKategoriBaru(""); setPesanKategori(""); }}>Batal</button>
            </div>
          )}
          {pesanKategori && <small className="pesan-kategori" role="status">{pesanKategori}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="catatan">Catatan <span>(opsional)</span></label>
          <textarea id="catatan" rows="4" placeholder="Tuliskan catatan tambahan di sini..." value={catatan} onChange={(e) => setCatatan(e.target.value)} />
        </div>
        <button type="submit" className="btn-tambah">Simpan Jadwal</button>
      </form>
    </section>
  );
}

export default FormTugas;
