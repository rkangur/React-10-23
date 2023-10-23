import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import MitteLeitud from './pages/MitteLeitud';
import { useState } from 'react';


function App() {
  const [stiil, uuendaStiil] = useState("hele");

  return (
    <div className={stiil}>
      <button onClick={() => uuendaStiil("tume")}>
        Tumedaks
      </button> <br />
      <button onClick={() => uuendaStiil("hele")}>
        Heledaks
      </button> <br />

      <Link to="/avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="auto" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupu-stiil">Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupu-stiil">Lisa toode</button>
      </Link>

    <Routes>
      <Route path="avaleht" element={ <Avaleht /> } />
      <Route path="ostukorv" element={ <Ostukorv /> } />
      <Route path="lisa-toode" element={ <LisaToode />} />
      <Route path="*" element={ <MitteLeitud />} />
    </Routes>
    </div>
  );
}

export default App;
