import React from 'react';
import './styles.css';
import cardOne from '../../imagens/img_2.png'
import cardTwo from '../../imagens/img_3.png'

export const Cards = () => {
  return (
    <article className="card-box">
      <img className="card-img" src={cardOne} alt="card one"></img>
      <img className="card-img" src={cardTwo} alt="card one"></img>
    </article>
  )
}