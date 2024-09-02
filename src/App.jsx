import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer"; // Asegúrate de tener este archivo creado
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio';  
import Video from './pages/Video';
import Fotos from './pages/Fotos';
import Show from './pages/Show';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="px-4 pt-6">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/video" element={<Video />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/show" element={<Show />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
