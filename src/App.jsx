import Header from "./components/Header";
import RingkasanTugas from "./components/RingkasanTugas";
import FormTugas from "./components/FormTugas";
import DaftarTugas from "./components/DaftarTugas";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <RingkasanTugas totalTugas={2} />
      <main className="main-content">
        <FormTugas />
        <DaftarTugas />
      </main>
    </div>
  );
}

export default App;
