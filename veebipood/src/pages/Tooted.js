import React, { useState } from 'react';
import tootedOstukorvis from "../data/ostukorv.json"; // juurde lisamiseks
import tootedFailist from "../data/tooted.json"; // kuvab välja
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooteid] = useState(tootedFailist);

  const lisaOstukorvi = (lisatav) => {
    tootedOstukorvis.push(lisatav);
  }

  const sorteeriHindKasvavalt = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooteid(tooted.slice());
  }

  const sorteeriHindKahanevalt = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooteid(tooted.slice());
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooteid(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooteid(tooted.slice());
  }

  const filtreeriB = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
    uuendaTooteid(vastus);
  }

  const filtreeriN = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
    uuendaTooteid(vastus);
  }

  const filtreeriT = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
    uuendaTooteid(vastus);
  }

  const originaali = () => {
    uuendaTooteid(tootedFailist);
  }

  
  return (
    <div>
      <button onClick={sorteeriHindKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriHindKahanevalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriAZ}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriZA}>Sorteeri kasvavalt</button>
      <br /><br />
      <button onClick={filtreeriB}>B</button>
      <button onClick={filtreeriN}>N</button>
      <button onClick={filtreeriT}>T</button>
      <br />
      <button onClick={originaali}>Originaali</button>

      { tooted.map((toode, indeks) => 
        <div key={indeks}> <br />
          <img className={toode.aktiivne === true ? 'pilt' : "pilt-mitteaktiivne"} src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind} €</div>
          { toode.aktiivne === true ? <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button> : 
          <span>Toode mitteaktiivne</span>}

          {/* <button disabled={toode.aktiivne === false} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button> */}
          <Link to={"/yksik-toode/" + indeks
          }>
            <button>Vaata detailsemalt</button>
          </Link>
        </div> )
      }
    </div>
  )
}

export default Tooted