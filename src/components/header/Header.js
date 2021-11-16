import React from 'react';
import imagens from '../../imagens/logo-m3.png';
import './styles.css';

export const Header = () => {
  return (
    <header className="header">
      <img  className="logo-image" src={imagens} alt="logo"></img>
    </header>
  )
}