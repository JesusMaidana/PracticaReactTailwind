import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Video from "./pages/Video";
import Fotos from "./pages/Fotos";
import Show from "./pages/Show";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 pt-6">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/video" element={<Video />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/show" element={<Show />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
