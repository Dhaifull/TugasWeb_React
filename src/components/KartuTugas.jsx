function KartuTugas({ jadwal, onHapus, onDetail }) {
  const date = new Date(`${jadwal.tanggal}T00:00:00`).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  return (
    <article className="kartu-tugas">
      <div className="kartu-header">
        <h4>{jadwal.nama}</h4>
        <span className={`badge ${["Kuliah", "Tugas", "Pribadi"].includes(jadwal.kategori) ? `badge-${jadwal.kategori.toLowerCase()}` : "badge-custom"}`}>{jadwal.kategori}</span>
      </div>
      <p><strong>Tanggal:</strong> {date}</p>
      <p><strong>Jam:</strong> {jadwal.jam}</p>
      <div className="kartu-actions">
        <button type="button" className="btn-detail" onClick={() => onDetail(jadwal)}>Detail</button>
        <button type="button" className="btn-hapus" onClick={() => onHapus(jadwal.id)}>Hapus</button>
      </div>
    </article>
  );
}

export default KartuTugas;
