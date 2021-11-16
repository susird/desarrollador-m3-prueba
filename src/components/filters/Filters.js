import React from 'react';
import './styles.css';

export const Filters = () => {

  return (
    <article className="article-box">
      <h1 className="title">Blusas</h1>
      <article className="filters">
        <button className="button-filter">Filtrar</button>
        <button className="button-filter">Ordenar</button>
      </article>
    </article>
  )
}