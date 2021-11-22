import React, { useState } from 'react';
import './styles.css';
import {useViewport} from '../../hooks/useViewport';

export const Filters = ({setFilter}) => {
  const [toggle, setToggle] = useState(false);
  const { width } = useViewport();

  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilter(state => ({
      ...state,
      prop: 'color',
      value: name,
      data: state.data.filter(product => product.color.toLowerCase() === name.toLowerCase())
    }))
  }


  return (
    <article className="filter-box">
      <h1 className="title">Blusas</h1>
      <article className="button-filters-mobile">
        <button className="button-filter" onClick={() => setToggle(!toggle)}>Filtrar</button>
        <button className="button-filter">Ordenar</button>
      </article>
      {(toggle || width >= 920) &&  <form className="button-filters-pc">
        <fieldset className="colors-filter" onClick={(event) => handleFilter(event)}>
          <legend>CORES</legend>
          <input type="checkbox" id="yellow" name="Amarelo"/>
          <label for="yellow">Amarelo</label>
          <input type="checkbox" id="blue" name="Azul"/>
          <label for="blue">Azul</label>
          <input type="checkbox" id="white" name="Branco"/>
          <label for="white">Branco</label>
          <input type="checkbox" id="gray" name="Cinza"/>
          <label for="Cinza">Cinza</label>
          <input type="checkbox" id="orange" name="Laranja"/>
          <label for="orange">Laranja</label>
        </fieldset>
        <fieldset className="size-filter">
        <legend>TAMANHOS</legend>
          <input type="checkbox" placeholder="P" id="small"/>
          <label for="small">P</label>
          <input type="checkbox" placeholder="M" id="medium"/>
          <label for="medium">M</label>
          <input type="checkbox" placeholder="G" id="large"/>
          <label for="large">G</label>
          <input type="checkbox" placeholder="GG" id="extra-large"/>
          <label for="extra-large">GG</label>
          <input type="checkbox" placeholder="U" id="unique"/>
          <label for="unique">U</label>
          <input type="checkbox" placeholder="36" id="thirty-six"/>
          <label for="thirty-six">36</label>
          <input type="checkbox" placeholder="38" id="thirty-eight"/>
          <label for="thirty-eight">38</label>
          <input type="checkbox" placeholder="40" id="forty"/>
          <label for="forty">40</label>
          <input type="checkbox" placeholder="42" id="forty-two"/>
          <label for="forty-two">42</label>
          <input type="checkbox" placeholder="44" id="forty-four"/>
          <label for="forty-four">44</label>
          <input type="checkbox" placeholder="46" id="forty-six"/>
          <label for="forty-six">46</label>
        </fieldset>
        <fieldset className="price-filter">
          <legend>FAIXA DE PREÇOS</legend>
          <input type="checkbox" id="scales" name="scales"/>
          <label for="scales">de R$0 até R$50</label>
          <input type="checkbox" id="scales" name="scales"/>
          <label for="scales">de R$51 até R$150</label>
          <input type="checkbox" id="scales" name="scales"/>
          <label for="scales">de R$151 até R$300</label>
          <input type="checkbox" id="scales" name="scales"/>
          <label for="scales">de R$301 até R$500</label>
          <input type="checkbox" id="scales" name="scales"/>
          <label for="scales">a partir de R$ 01</label>
        </fieldset>
      </form>}
    </article>
  )
}