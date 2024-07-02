import React, { useEffect, useState } from "react";

import { products } from "../../products";
import ItemList from "./ItemList";

function ItemListContainer({ titulo, mensaje }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  // useEffect( ()=>{}, [])

  useEffect(() => {
    // obteniendo el producto
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(products);
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
  }, []);

  return <ItemList items={items} />;
}

export default ItemListContainer;
