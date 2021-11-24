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
          <input className="checkbox" type="checkbox" id="yellow" name="Café"/>
          <label for="yellow">Café</label>
          <input className="checkbox" type="checkbox" id="blue" name="Rosado"/>
          <label for="blue">Rosado</label>
          <input className="checkbox" type="checkbox" id="white" name="Branco"/>
          <label for="white">Branco</label>
          <input className="checkbox" type="checkbox" id="gray" name="Cinza"/>
          <label for="Cinza">Cinza</label>
          <input className="checkbox" type="checkbox" id="orange" name="Laranja"/>
          <label for="orange">Laranja</label>
          <input className="checkbox" type="checkbox" id="black" name="Preto"/>
          <label for="black">Preto</label>
        </fieldset>
        <fieldset className="size-filter">
        <legend>TAMANHOS</legend>
          <input className="checkbox-size" type="checkbox" placeholder="P" id="small"/>
          <label className="label-size" for="small">P</label>
          <input className="checkbox-size" type="checkbox" placeholder="M" id="medium"/>
          <label className="label-size" for="medium">M</label>
          <input className="checkbox-size" type="checkbox" placeholder="G" id="large"/>
          <label className="label-size" for="large">G</label>
          <input className="checkbox-size" type="checkbox" placeholder="GG" id="extra-large"/>
          <label className="label-size" for="extra-large">GG</label>
          <input className="checkbox-size" type="checkbox" placeholder="U" id="unique"/>
          <label className="label-size" for="unique">U</label>
          <input className="checkbox-size" type="checkbox" placeholder="36" id="thirty-six"/>
          <label className="label-size" for="thirty-six">36</label>
          <input className="checkbox-size" type="checkbox" placeholder="38" id="thirty-eight"/>
          <label className="label-size" for="thirty-eight">38</label>
          <input className="checkbox-size" type="checkbox" placeholder="40" id="forty"/>
          <label className="label-size" for="forty">40</label>
          <input className="checkbox-size" type="checkbox" placeholder="42" id="forty-two"/>
          <label className="label-size" for="forty-two">42</label>
          <input className="checkbox-size" type="checkbox" placeholder="44" id="forty-four"/>
          <label className="label-size" for="forty-four">44</label>
          <input className="checkbox-size" type="checkbox" placeholder="46" id="forty-six"/>
          <label className="label-size" for="forty-six">46</label>
        </fieldset>
        <fieldset className="price-filter">
          <legend>FAIXA DE PREÇOS</legend>
          <input className="checkbox" type="checkbox" id="scales" name="scales"/>
          <label for="scales">de R$0 até R$50</label>
          <input className="checkbox" type="checkbox" id="scales" name="scales"/>
          <label for="scales">de R$51 até R$150</label>
          <input className="checkbox" type="checkbox" id="scales" name="scales"/>
          <label for="scales">de R$151 até R$300</label>
          <input className="checkbox" type="checkbox" id="scales" name="scales"/>
          <label for="scales">de R$301 até R$500</label>
          <input className="checkbox" type="checkbox" id="scales" name="scales"/>
          <label for="scales">a partir de R$ 01</label>
        </fieldset>
      </form>}
    </article>
  )
}