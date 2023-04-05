import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navegacion from "./Componentes/Navegacion";
import Header_Left from "./Componentes/Header_Left";
import Header_Right from "./Componentes/Header_Right";
import Sub_Temas from "./Componentes/Sub_Temas";

import imagen1 from "./Imagenes/image-retro-pcs.jpg";
import imagen2 from "./Imagenes/image-top-laptops.jpg";
import imagen3 from "./Imagenes/image-gaming-growth.jpg";

const titulos = {
  titulo1 : "Reviving Retro Pcs",
  titulo2 : "Top 10 Laptos of 2022",
  titulo3 : "The Growth of Gaming",
}

function App() {
  return (
    <div className="App container">
      <Navegacion />
      <header>
        <Header_Left />
        <Header_Right />
      </header>
      <section>
        <Sub_Temas numero="01" imagen={imagen1} titulo={titulos.titulo1}/>
        <Sub_Temas numero="02" imagen={imagen2} titulo={titulos.titulo2}/>
        <Sub_Temas numero="03" imagen={imagen3} titulo={titulos.titulo3}/>
      </section>
    </div>
  );
}

export default App;
