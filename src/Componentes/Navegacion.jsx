import React from "react";
import logo from '../Imagenes/logo.svg';
import { useState } from "react";

function Navegacion (){

  const [abierto, setAbierto] = useState(false)

  return( 
    <nav>
      <div className="contenedor_izquierda">
        <img className="imagen_logo" src={logo}/>
      </div>
      <div className="contenedor_derecha">
        <div className={`nav_items  ${abierto && "open"}`}>         
          <h1>Home</h1>
          <h1>New</h1>
          <h1>Popular</h1>
          <h1>Trending</h1>
          <h1>Categories</h1>
        </div>
        <div className={`nav_toggle ${abierto && "open"} `} onClick={ () => setAbierto(!abierto)} >
          <span ></span>
          <span ></span>
          <span ></span>
        </div>
      </div>
    </nav>
  )
}
export default Navegacion