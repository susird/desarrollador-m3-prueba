import React from 'react';
import { Cards } from '../cards/Cards';
import { Filters } from '../filters/Filters';
import { Header } from '../header/Header';
import './styles.css';

export const Main = () => {
  return (
    <main className="main">
      <Header />
      <Filters />
      <Cards />
    </main>
  )
}