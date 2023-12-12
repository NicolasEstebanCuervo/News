import {BrowserRouter, Routes, Route} from "react-router-dom"
import IndexPage from './Pages/IndexPage';
import PoliticsPage from "./Pages/PoliticsPage";
import EconomyPage from "./Pages/EconomyPage";



import CienciaPage from "./Pages/SciencePage";
import CulturaPage from "./Pages/SportsPage";
import DeportesPage from "./Pages/SportsPage";
import EntretenimientoPage from "./Pages/EntertainmentPage";
import TecnologiaPage from "./Pages/TecnologyPage";
import CienciaPageIndividual from "./Pages/SciencePage/SciencePageindividual";
import CulturaPageIndividual from "./Pages/SportsPage/SportsPageindividual";
import DeportesPageIndividual from "./Pages/SportsPage/SportsPageindividual";
import EconomiaPageIndividual from "./Pages/EconomyPage/EconomyPageindividual";
import EntretenimientoPageIndividual from "./Pages/EntertainmentPage/EntertainmentPageindividual";
import PoliticaPageIndividual from "./Pages/PoliticsPage/PoliticsPageindividual";
import TecnologiaPageIndividual from "./Pages/TecnologyPage/TecnologyPageindividual";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage></IndexPage>}/>
          <Route path="/Ciencia" element={<CienciaPage></CienciaPage>}/>
          <Route path="/Cultura" element={<CulturaPage></CulturaPage>}/>
          <Route path="/Deportes" element={<DeportesPage></DeportesPage>}/>
          <Route path="/Economia" element={<EconomyPage></EconomyPage>}/>
          <Route path="/Entretenimiento" element={<EntretenimientoPage></EntretenimientoPage>}/>
          <Route path="/Politica" element={<PoliticsPage></PoliticsPage>}/>
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
