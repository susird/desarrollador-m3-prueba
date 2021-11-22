import React, { useEffect, useState } from 'react';
import { Cards } from '../cards/Cards';
import { Filters } from '../filters/Filters';
import './styles.css';
import { useProducts } from '../../hooks/useProduct';

export const Main = () => {
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
      <Cards data={filter.data} />
    </main>
  )
}