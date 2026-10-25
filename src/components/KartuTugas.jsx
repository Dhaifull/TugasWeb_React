function KartuTugas({ judul, mataKuliah, deadline, prioritas }) {
  const getBadgeClass = (level) => {
    if (level === "Tinggi") return "badge badge-tinggi";
    if (level === "Sedang") return "badge badge-sedang";
    return "badge badge-rendah";
  };

  return (
    <div className="kartu-tugas">
      <div className="kartu-header">
        <h4>{judul}</h4>
        <span className={getBadgeClass(prioritas)}>{prioritas}</span>
      </div>
      <p><strong>Mata Kuliah:</strong> {mataKuliah}</p>
      <p><strong>Batas Waktu:</strong> {deadline}</p>
    </div>
  );
}

export default KartuTugas;
