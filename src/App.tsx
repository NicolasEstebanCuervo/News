import {BrowserRouter, Routes, Route} from "react-router-dom"
import Post from './Pages/IndexPage';
import CienciaPage from "./Pages/CienciaPage";
import CulturaPage from "./Pages/CulturaPage";
import DeportesPage from "./Pages/DeportesPage";
import EconomiaPage from "./Pages/EconomiaPage";
import EntretenimientoPage from "./Pages/EntretenimientoPage";
import PoliticaPage from "./Pages/PoliticaPages";
import TecnologiaPage from "./Pages/TecnologiaPage";
import CienciaPageIndividual from "./Pages/CienciaPage/CienciaPageindividual";
import CulturaPageIndividual from "./Pages/CulturaPage/CulturaPageindividual";
import DeportesPageIndividual from "./Pages/DeportesPage/DeportesPageindividual";
import EconomiaPageIndividual from "./Pages/EconomiaPage/EconomiaPageindividual";
import EntretenimientoPageIndividual from "./Pages/EntretenimientoPage/EntretenimientoPageindividual";
import PoliticaPageIndividual from "./Pages/PoliticaPages/PoliticaPageindividual";
import TecnologiaPageIndividual from "./Pages/TecnologiaPage/TecnologiaPageindividual";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post></Post>}/>
          <Route path="/Ciencia" element={<CienciaPage></CienciaPage>}/>
          <Route path="/Cultura" element={<CulturaPage></CulturaPage>}/>
          <Route path="/Deportes" element={<DeportesPage></DeportesPage>}/>
          <Route path="/Economia" element={<EconomiaPage></EconomiaPage>}/>
          <Route path="/Entretenimiento" element={<EntretenimientoPage></EntretenimientoPage>}/>
          <Route path="/Politica" element={<PoliticaPage></PoliticaPage>}/>
          <Route path="/Tecnologia" element={<TecnologiaPage></TecnologiaPage>}/>
          
          <Route path="/Ciencia/:id" element={<CienciaPageIndividual></CienciaPageIndividual>}/>
          <Route path="/Cultura/:id" element={<CulturaPageIndividual></CulturaPageIndividual>}/>
          <Route path="/Deportes/:id" element={<DeportesPageIndividual></DeportesPageIndividual>}/>
          <Route path="/Economia/:id" element={<EconomiaPageIndividual></EconomiaPageIndividual>}/>
          <Route path="/Entretenimiento/:id" element={<EntretenimientoPageIndividual></EntretenimientoPageIndividual>}/>
          <Route path="/Politica/:id" element={<PoliticaPageIndividual></PoliticaPageIndividual>}/>
          <Route path="/Tecnologia/:id" element={<TecnologiaPageIndividual></TecnologiaPageIndividual>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
