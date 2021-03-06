import React from 'react';
import './styles.css';

export const Cards = ({data, handleBuyItem}) => {

  return (
    <article className="card-box">
      {data && data.length ? data.map(card =>
        <article className="card-content" key={card.sku}>
          <img className="card-img" src={"/"+card.images.product} alt="card one" />
          <h3 className="product-name">{card.producName}</h3>
          <p className="price">R${card.price}</p>
          <p className="wholesale">{card.wholesale}</p>
          <button className="buy-button" onClick={handleBuyItem}>COMPRAR</button>
        </article>
      )
        : "loading..."}
    </article>
  )
}