import React,{ useEffect, useState } from "react";
import { URL_API } from "../components/cards/utils";


export const useProducts = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(URL_API).then((res) => res.json()).then((res) => {
      setData(res);
    })
  }, [])
  return { data };
}