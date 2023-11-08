import React, {useRef, useState} from 'react';
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  // function lisa() {
  //   uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
  // }

  // uuem lähenemine Reacti, populaarsem ja veidi raskem
  const lisa = () => {
    uuendaSonum("Toode lisatud: " + nimiRef.current.value);
    tootedFailist.push( {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivneRef.current.checked, 
      "pilt": piltRef.current.value
    } );
  }

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="toode_id">Toote nimi</label> <br />
      <input ref={nimiRef} id="toode:id" type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} id="toode:id" type="number" /> <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} id="toode:id" type="text" /> <br />
      <label>Aktiivne</label> <br />
      <input ref={aktiivneRef} id="toode:id" type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode