function RingkasanTugas({ totalTugas }) {
  return (
    <div className="ringkasan-box">
      <h3>Ringkasan Jadwal</h3>
      <p>
        Total jadwal saat ini: <strong>{totalTugas}</strong> jadwal
      </p>
    </div>
  );
}

export default RingkasanTugas;
