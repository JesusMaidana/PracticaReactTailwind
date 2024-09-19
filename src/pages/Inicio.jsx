import React from 'react';
import { MainArticle } from '../componentes/MainArticle';
import { Formulario } from '../componentes/Formulario'; // Importa el nuevo componente
import { Escuelas } from '../componentes/Escuelas';
import { Testimonios } from '../componentes/Testimonios';
import { NewContainer } from '../componentes/NewContainer';
import { ArticlesContainer } from '../componentes/ArticlesContainer';

const Inicio = () => {
  return (
    <>
      <MainArticle />
      
      <Formulario /> {/* Agrega el nuevo componente aquí */}
      
      <Escuelas />
      <Testimonios />
      <NewContainer />
      <ArticlesContainer />
    </>
  );
};

export default Inicio;
