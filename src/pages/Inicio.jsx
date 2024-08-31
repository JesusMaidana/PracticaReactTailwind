import React from 'react';
import { MainArticle } from '../componentes/MainArticle';
import { NewContainer } from '../componentes/NewContainer';
import { ArticlesContainer } from '../componentes/ArticlesContainer';

const Inicio = () => {
  return (
    <>
      <MainArticle />
      <NewContainer />
      <ArticlesContainer />
    </>
  );
};

export default Inicio;
