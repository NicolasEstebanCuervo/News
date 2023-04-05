import React from "react";

function Sub_Temas (props){
  return(
    <div className="div_sub_temas">
      <img className="imagen" src={props.imagen} />
      <div className="div_textos">
        <h1 className="numero">{props.numero}</h1>
        <h1 className="titulo">{props.titulo}</h1>
        <h1 className="texto">
          Lorem ipsum dolor sit amet consectetur. Quod ullam maxime, voluptas soluta 
        </h1>
      </div>
    </div>
  )
}

export default Sub_Temas