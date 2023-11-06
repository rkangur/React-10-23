import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import MitteLeitud from './pages/MitteLeitud';
import { useState } from 'react';
import Seaded from './pages/Seaded';
import Hinnad from './pages/Hinnad';
import Tooted from './pages/Tooted';
import Poed from './pages/Poed';
import YksToode from './pages/YksToode';
import MuudaToode from './pages/MuudaToode';
import YksPood from './pages/YksPood';
import HaldaTooted from './pages/HaldaTooted';



function App() {
  const [stiil, uuendaStiil] = useState(localStorage.getItem("stiil") || "hele"); // || - kui sellist võtit ei leita

  const stiilTumedaks = () => {
    uuendaStiil("tume");
    localStorage.setItem("stiil", "tume");
  }

  const stiilHeledaks = () => {
    uuendaStiil("hele");
    localStorage.setItem("stiil", "hele");
  }

  return (
    <div className={stiil}>
      <button onClick={stiilTumedaks}>
        Tumedaks
      </button> <br />
      <button onClick={stiilHeledaks}>
        Heledaks
      </button> <br />

      <Link to="/avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="auto" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupu-stiil">Ostukorvi</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupu-stiil">Hinnad</button>
      </Link>

      <Link to="/seaded">
        <button className="nupu-stiil">Seaded</button>
      </Link>

      <Link to="/poed">
        <button className="nupu-stiil">Poed</button>
      </Link>

      <Link to="/tooted">
        <button className="nupu-stiil">Tooted</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupu-stiil">Lisa toode</button>
      </Link>

      <Link to="/halda">
        <button className="nupu-stiil">Muuda/kustuta tooteid</button>
      </Link>

    <Routes>
      <Route path="avaleht" element={ <Avaleht /> } />
      <Route path="ostukorv" element={ <Ostukorv /> } />
      <Route path="lisa-toode" element={ <LisaToode />} />
      <Route path="*" element={ <MitteLeitud />} />
      <Route path="seaded" element={ <Seaded /> } />
      <Route path="hinnad" element={ <Hinnad /> } />
      <Route path="tooted" element={ <Tooted /> } />
      <Route path="halda" element={ <HaldaTooted /> } />
      <Route path="yksik-toode/:toote_indeks" element={ <YksToode /> } /> 
      <Route path="yksik-pood/:poe_indeks" element={ <YksPood /> } />
      <Route path="muuda-toode/:toote_jrknr" element={ <MuudaToode /> } />
      <Route path="poed" element={ <Poed /> } />
    </Routes>
    </div>
  );
}

// /: ütleb, et tegemist on muutuva kohaga

export default App;
