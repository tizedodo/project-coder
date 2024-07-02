import React, { useState } from "react";
import CartWidget from "../CartWidget";
import "./navbar.css";
import Swal from "sweetalert2";
import Figure from "react-bootstrap/Figure";

import IconButton from "@mui/material/IconButton";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleClickMenu = (param) => {
    Swal.fire({
      title: `${param}: no disponible!`,
      text: "Porfavor espere unos dias mas todavia no he llegardo a esa parte del curso...",
      icon: "error",
    });
  };

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
    document.body.style.overflow = activeMenu ? "" : "hidden";
  };

  return (
    <>
      <div className="nav-container">
        <div className="d-flex align-items-center cursor-pointer position-relative z-index-5">
          <Figure.Image
            className="cursor-pointer z-index-5 "
            width={40}
            height={40}
            alt="40x40"
            src="https://res.cloudinary.com/dsxrdjiu5/image/upload/v1718251255/logoEco_l1nuai.jpg"
          />

          <h1 className="nav-logo">
            TiZE <span>Shop</span>
          </h1>
        </div>
        <button
          className={`menu-ham ${activeMenu ? "active" : ""}`}
          onClick={() => handleActiveMenu()}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className={`item-menu ${activeMenu ? "active" : ""}`}>
          <ul className="nav-ul">
            <li onClick={() => handleClickMenu("Pc")}>Pc</li>
            <li onClick={() => handleClickMenu("Perfume")}>Perfume</li>
            <li onClick={() => handleClickMenu("Acessorios")}>Acessorios</li>
            <li onClick={() => handleClickMenu("Celulares")}>Celulares</li>
            <li onClick={() => handleClickMenu("Productos")}>Otros</li>
          </ul>
          <div className="icon-cart">
            <IconButton>
              <CartWidget />
            </IconButton>
          </div>
        </div>
        <div
          onClick={() => handleActiveMenu()}
          className={`overlay ${activeMenu ? "active" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
