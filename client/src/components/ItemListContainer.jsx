import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

function ItemListContainer({ titulo, mensaje }) {
  const [showMesaje, setShowMesaje] = useState(false);

  const handleClick = () => {
    setShowMesaje(!showMesaje);
  };
  return (
    <div className="mt-5 text-center">
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
    </div>
  );
}

export default ItemListContainer;
