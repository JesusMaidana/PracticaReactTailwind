import React from 'react';
import { MainArticle } from '../componentes/MainArticle';
import { NewContainer } from '../componentes/NewContainer';
import { ArticlesContainer } from '../componentes/ArticlesContainer';
import { Escuelas } from '../componentes/Escuelas';
import { Testimonios } from '../componentes/Testimonios';

const Inicio = () => {
  return (
    <>
      <MainArticle />
      <Escuelas/>
      <Testimonios/>
      <NewContainer />
      <ArticlesContainer />
    </>
  );
};

export default Inicio;
