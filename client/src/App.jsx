import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
// import './App.css'

function App() {
  const titulo = "Bienvenido al E-Commerce de Tize-Dodo!";
  const mensaje =
    "Rapidez, Calidad y precio, sientete seguro en comprar y confiar en nuestra app...";

  return (
    <>
      <Navbar />
      <ItemListContainer titulo={titulo} mensaje={mensaje} />
    </>
  );
}

export default App;
