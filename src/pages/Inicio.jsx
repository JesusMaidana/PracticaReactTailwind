import React from 'react';
import { MainArticle } from '../componentes/MainArticle';
import { NewContainer } from '../componentes/NewContainer';
import { ArticlesContainer } from '../componentes/ArticlesContainer';

const Inicio = () => {
  return (
    <div>
      <MainArticle />
      <NewContainer />
      <ArticlesContainer />
    </div>
  );
};

export default Inicio;
