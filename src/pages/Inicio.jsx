import React from 'react';
import { MainArticle } from '../componentes/MainArticle';
import { Formulario } from '../componentes/Formulario'; // Importa el nuevo componente
import { Escuelas } from '../componentes/Escuelas';
import { Testimonios } from '../componentes/Testimonios';
import { ProximosShows } from '../componentes/ProximosShows';
import { ArticlesContainer } from '../componentes/ArticlesContainer';

const Inicio = () => {
  return (
    <>
      <MainArticle />
      
      
      <Escuelas />
      <Testimonios />
      <ProximosShows />
      <ArticlesContainer />
    </>
  );
};

export default Inicio;
