import React, { useState, useEffect } from 'react';
import './styles.css';
import { PUBLIC_URL } from './utils';

export const Cards = ({data}) => {
 
  return (
    <article className="card-box">
      {data && data.length ? data.map(card =>
        <article className="card-content" key={card.sku}>
          <img className="card-img" src={PUBLIC_URL + card.images.product} alt="card one" />
          <h3 className="product-name">{card.producName}</h3>
          <p className="price">{card.price}</p>
          <p className="wholesale">{card.wholesale}</p>
          <button className="buy-button">COMPRAR</button>
        </article>
      )
        : "loading..."}
    </article>
  )
}