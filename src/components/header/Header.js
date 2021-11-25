import React from 'react';

import './styles.css';

export const Header = ({itemsCounter}) => {
  return (
    <header className="header">
      <img  className="logo-image" src={process.env.PUBLIC_URL + "/src/imagens/logo-m3.png"} alt="logo"></img>
      <div className="shopping-bag-container">
        <div className="counter-bag">{itemsCounter}</div>
        <img  className="shopping-bag" src={process.env.PUBLIC_URL + "/src/imagens/shopping-bag.png"} alt="logo"></img>
      </div>
    </header>
  )
}