import React from "react";
import Imagen_Header from "../Imagenes/image-web-3-mobile.jpg"

function Header_Left (){
  return( 
    <div className="div_header_left">
      <img className="imagen_header" src={Imagen_Header} />
      <div className="div_textos">
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, voluptates amet. Et voluptatem asperiores cumque provident quasi dicta tenetur soluta cum quaerat quam ab quod, odio vitae? Omnis, velit quas.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Header_Left