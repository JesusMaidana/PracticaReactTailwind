import React from 'react';
import { Hero } from '../componentes/Hero';
import { Formulario } from '../componentes/Formulario'; // Importa el nuevo componente
import { Escuelas } from '../componentes/Escuelas';
import { Testimonios } from '../componentes/Testimonios';
import { ProximosShows } from '../componentes/ProximosShows';
import { ArticlesContainer } from '../componentes/ArticlesContainer';

const Inicio = () => {
  return (
    <>
      <Hero />
      
      
      <Escuelas />
      <Formulario /> {/* Agrega el nuevo componente aquí */}
      <Testimonios />
      <ProximosShows />
      <ArticlesContainer />
    </>
  );
};

export default Inicio;
