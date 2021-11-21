import React from 'react';

import './styles.css';

export const Header = () => {
  return (
    <header className="header">
      <img  className="logo-image" src={process.env.PUBLIC_URL + "/src/imagens/logo-m3.png"} alt="logo"></img>
    </header>
  )
}