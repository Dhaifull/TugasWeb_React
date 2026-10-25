function FormTugas() {
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="mataKuliah">Mata Kuliah</label>
          <input
            id="mataKuliah"
            type="text"
            placeholder="Contoh: Perancangan Web"
          />
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Batas Waktu</label>
          <input
            id="deadline"
            type="text"
            placeholder="Contoh: 30 Oktober 2026"
          />
        </div>
        <div className="form-group">
          <label htmlFor="prioritas">Prioritas</label>
          <select id="prioritas">
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
