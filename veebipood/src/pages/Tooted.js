import React from 'react';
import tootedOstukorvis from "../data/ostukorv.json"; // juurde lisamiseks
import tootedFailist from "../data/tooted.json"; // kuvab välja

function Tooted() {
  const tooted = tootedFailist;

  const lisaOstukorvi = (lisatav) => {
    tootedOstukorvis.push(lisatav);
  }

  return (
    <div>
      { tooted.map((toode, indeks) => 
        <div key={indeks}>
          {toode}
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div> )}
    </div>
  )
}

export default Tooted