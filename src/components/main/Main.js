import React, { useEffect, useState } from 'react';
import { Cards } from '../cards/Cards';
import { Filters } from '../filters/Filters';
import './styles.css';
import { useProducts } from '../../hooks/useProduct';
import { LoadingButton } from '../loadingButton/LoadingButton';

export const Main = ({handleBuyItem}) => {
  const { data } = useProducts();
  const [filter, setFilter] = useState({ prop: '', value: '', data: data })

  useEffect(() => {
    if (!filter.prop && !filter.value) {
      setFilter(state => ({ ...state, data }))
    }
  }, [data, filter.prop, filter.value])

  return (
    <main className="main">
      <Filters setFilter={setFilter} />
      <section className="section-card-button">
        <Cards handleBuyItem={handleBuyItem} data={filter.data} />
        <LoadingButton />
      </section>
    </main>
  )
}