import { Header } from "./componentes/Header";
import { MainArticle } from "./componentes/MainArticle";
import { NewContainer } from "./componentes/NewContainer";
import { ArticlesContainer } from "./componentes/ArticlesContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from './pages/Inicio';  // Asegúrate de importar el componente Inicio
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
        <div className="grid grid-cols-12 gap-3">
          <MainArticle />
          <NewContainer />
        </div>
        <ArticlesContainer />
      </main>
    </BrowserRouter>
  );
}

export default App;
