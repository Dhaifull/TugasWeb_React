function RingkasanTugas({ totalTugas }) {
  return (
    <div className="ringkasan-box">
      <h3>Ringkasan Tugas</h3>
      <p>
        Total tugas saat ini: <strong>{totalTugas}</strong> tugas
      </p>
    </div>
  );
}

export default RingkasanTugas;
