import {BrowserRouter, Routes, Route} from "react-router-dom"
import IndexPage from './Pages/IndexPage';
import PoliticsPage from "./Pages/PoliticsPage";
import EconomyPage from "./Pages/EconomyPage";
import TecnologyPage from "./Pages/TecnologyPage";
import TecnologyPageIndividual from "./Pages/TecnologyPage/TecnologyPageindividual";
import CulturePage from "./Pages/CulturePage";
import SportsPage from "./Pages/SportsPage";
import SciencePage from "./Pages/SciencePage";
import EntertainmentPage from "./Pages/EntertainmentPage";
import PoliticsPageIndividual from "./Pages/PoliticsPage/PoliticsPageindividual";
import EconomyPageIndividual from "./Pages/EconomyPage/EconomyPageindividual";
import SciencePageIndividual from "./Pages/SciencePage/SciencePageindividual";
import SportsPageIndividual from "./Pages/SportsPage/SportsPageindividual";
import EntertainmentPageIndividual from "./Pages/EntertainmentPage/EntertainmentPageindividual";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage></IndexPage>}/>
          <Route path="/Politics" element={<PoliticsPage></PoliticsPage>}/>
          <Route path="/Economy" element={<EconomyPage></EconomyPage>}/>
          <Route path="/Tecnology" element={<TecnologyPage></TecnologyPage>}/>
          <Route path="/Culture" element={<CulturePage></CulturePage>}/>
          <Route path="/Sports" element={<SportsPage></SportsPage>}/>
          <Route path="/Science" element={<SciencePage></SciencePage>}/>
          <Route path="/Entertainment" element={<EntertainmentPage></EntertainmentPage>}/>
          

          <Route path="/Politics/:id" element={<PoliticsPageIndividual></PoliticsPageIndividual>}/>
          <Route path="/Economy/:id" element={<EconomyPageIndividual></EconomyPageIndividual>}/>
          <Route path="/Tecnology/:id" element={<TecnologyPageIndividual></TecnologyPageIndividual>}/>
          <Route path="/Culture/:id" element={<SciencePageIndividual></SciencePageIndividual>}/>
          <Route path="/Sports/:id" element={<SportsPageIndividual></SportsPageIndividual>}/>
          <Route path="/Science/:id" element={<SciencePageIndividual></SciencePageIndividual>}/>
          <Route path="/Entertainment/:id" element={<EntertainmentPageIndividual></EntertainmentPageIndividual>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
