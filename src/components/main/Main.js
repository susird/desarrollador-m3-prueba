import React from 'react';
import { Cards } from '../cards/Cards';
import { Filters } from '../filters/Filters';
import './styles.css';

export const Main = () => {
  return (
    <main className="main">
      <Filters />
      <Cards />
    </main>
  )
}