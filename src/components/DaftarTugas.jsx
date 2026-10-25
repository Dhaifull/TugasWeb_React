import KartuTugas from "./KartuTugas";

function DaftarTugas({ daftarTugas }) {
  return (
    <div className="daftar-container">
      <h3>Daftar Tugas</h3>
      {daftarTugas.length === 0 ? (
        <p className="pesan-kosong">Belum ada data tugas</p>
      ) : (
        <div className="daftar-list">
          {daftarTugas.map((tugas) => (
            <KartuTugas
              key={tugas.id}
              judul={tugas.judul}
              mataKuliah={tugas.mataKuliah}
              deadline={tugas.deadline}
              prioritas={tugas.prioritas}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DaftarTugas;
