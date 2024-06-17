import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { products } from "../../products";
import ItemList from "./ItemList";

function ItemListContainer({ titulo, mensaje }) {
  const [showMesaje, setShowMesaje] = useState(false);
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

  const handleClick = () => {
    setShowMesaje(!showMesaje);
  };
  return (
    <>
      <ItemList items={items} />
      {/* <div className="mt-5 text-center">
        <Container>
          <div className="d-grid">
            <h2>{titulo}</h2>
            {showMesaje && <span>{mensaje}</span>}
            <div className="mt-5">
              <Button onClick={handleClick} variant="dark">
                {!showMesaje ? "Show mensaje" : "Hide mensaje"}
              </Button>
            </div>
          </div>
        </Container>
      </div> */}
    </>
  );
}

export default ItemListContainer;
