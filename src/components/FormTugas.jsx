import { useState } from "react";

function FormTugas() {
  const [judul, setJudul] = useState("");
  const [mataKuliah, setMataKuliah] = useState("");
  const [deadline, setDeadline] = useState("");
  const [prioritas, setPrioritas] = useState("Tinggi");

  return (
    <div className="form-container">
      <h3>Tambah Tugas Baru</h3>
      <form>
        <div className="form-group">
          <label htmlFor="judul">Judul Tugas</label>
          <input
            id="judul"
            type="text"
            placeholder="Contoh: Implementasi Komponen React"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mataKuliah">Mata Kuliah</label>
          <input
            id="mataKuliah"
            type="text"
            placeholder="Contoh: Perancangan Web"
            value={mataKuliah}
            onChange={(e) => setMataKuliah(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Batas Waktu</label>
          <input
            id="deadline"
            type="text"
            placeholder="Contoh: 30 Oktober 2026"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prioritas">Prioritas</label>
          <select
            id="prioritas"
            value={prioritas}
            onChange={(e) => setPrioritas(e.target.value)}
          >
            <option value="Tinggi">Tinggi</option>
            <option value="Sedang">Sedang</option>
            <option value="Rendah">Rendah</option>
          </select>
        </div>
        <button type="submit" className="btn-tambah">
          Tambah
        </button>
      </form>
    </div>
  );
}

export default FormTugas;
