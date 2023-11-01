import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const lisa = (uus) => {
    ostukorv.push(uus);
    uuendaOstukorv(ostukorv.slice());
  }

  const kustuta = (jrknr) => {
    ostukorv.splice(jrknr,1); // mitmendat, mitu tk
    uuendaOstukorv(ostukorv.slice());
}

  const tyhjenda = () => {
    ostukorv.splice(0);
    uuendaOstukorv(ostukorv.slice());
  }

  return (
    <div>
      { ostukorv.length > 0 && <div><button onClick={tyhjenda}>Tühjenda</button><div>Kokku {ostukorv.length} toode(t)</div> </div>}
        { ostukorv.map((toode, indeks) => 
          <div key={indeks}>
            {toode} 
            <button onClick={() => lisa(toode)} className='kuldne'>Lisa</button> 
            <button onClick={() => kustuta(indeks)} className='kuldne'>Kustuta</button> 
          </div>) }
        { ostukorv.length === 0 && <div>Ostukorv on tühi!</div> }
        <Link to="/lisa-toode">
            <button>Lisa mõni toode ostukorvi</button>
        </Link>

    </div>
  )
}

export default Ostukorv