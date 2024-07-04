import React, { useEffect, useState } from "react";

import { products } from "../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import HeroBanner from "../../HeroBanner";

function ItemListContainer({ titulo, mensaje }) {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  // useEffect( ()=>{}, [])

  useEffect(() => {
    // obteniendo el producto
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let productByCategory = products.filter(
        (product) => product.category === name
      );
      if (x) {
        resolve(name ? productByCategory : products);
      } else {
        reject({ mesage: "error al obtener el producto", codigo: 404 });
      }
    });

    // manejar la repuesta del get
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  return (
    <>
      <HeroBanner />
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
