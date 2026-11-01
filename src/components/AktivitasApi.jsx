import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/quotes/random";
const CACHE_KEY = "dailyflow-kutipan-harian";

function getTanggalHariIni() {
  const hariIni = new Date();
  const bulan = String(hariIni.getMonth() + 1).padStart(2, "0");
  const tanggal = String(hariIni.getDate()).padStart(2, "0");
  return `${hariIni.getFullYear()}-${bulan}-${tanggal}`;
}

function AktivitasApi() {
  const [status, setStatus] = useState("loading");
  const [kutipan, setKutipan] = useState([]);
  const [percobaan, setPercobaan] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function muatKutipanHarian() {
      setStatus("loading");

      try {
        const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
        if (cache?.tanggal === getTanggalHariIni() && cache.kutipan?.quote && cache.kutipan?.author) {
          setKutipan([cache.kutipan]);
          setStatus("success");
          return;
        }
      } catch {
        // Cache yang rusak diabaikan; aplikasi mengambil kutipan baru dari API.
      }

      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        if (!data.quote || !data.author) {
          throw new Error("Respons API tidak berisi kutipan yang valid.");
        }

        setKutipan([data]);
        setStatus("success");
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ tanggal: getTanggalHariIni(), kutipan: data }));
        } catch {
          // Kutipan tetap ditampilkan jika penyimpanan browser tidak tersedia.
        }
      } catch {
        if (controller.signal.aborted) return;
        setStatus("error");
      }
    }

    muatKutipanHarian();
    return () => controller.abort();
  }, [percobaan]);

  return (
    <section className="api-container" aria-live="polite">
      <div className="api-heading">
        <h2>Kutipan Harian</h2>
        <p>Kutipan inspiratif untuk menemani aktivitas.</p>
      </div>

      {status === "loading" && (
        <p className="api-state api-loading" role="status">
          <span className="loading-spinner" aria-hidden="true" />
          Mengambil kutipan hari ini...
        </p>
      )}

      {status === "error" && (
        <div className="api-state api-error" role="alert">
          <p>Kutipan hari ini belum dapat dimuat. Periksa koneksi internet Anda, lalu coba lagi.</p>
          <button type="button" className="btn-coba-lagi" onClick={() => setPercobaan((nilai) => nilai + 1)}>
            Coba Lagi
          </button>
        </div>
      )}

      {status === "success" && (
        <ul className="quote-list">
          {kutipan.map((item) => (
            <li className="quote-card" key={item.id}>
              <blockquote className="quote-text">“{item.quote}”</blockquote>
              <p className="quote-author">— {item.author}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default AktivitasApi;
