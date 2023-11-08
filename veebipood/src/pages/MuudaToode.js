import React, { useRef } from 'react'
import tootedFailist from '../data/tooted.json'
import { useNavigate, useParams } from 'react-router-dom';
// 1. impordi tooted failist

function MuudaToode() {
  // 2. võta URLi muutuna useParams abiga
  const {toote_jrknr} = useParams();
  const leitudToode = tootedFailist[toote_jrknr];
  const nimiViide = useRef();
  const hindViide = useRef();
  const aktiivsusViide = useRef();
  const piltViide = useRef();
  const navigate = useNavigate(); // on hook JavaScripti poole peal URLi muutmiseks

  // 3. loo mall HTMLi ehk tekstiväljad, kus sees on muutuvad kohad

  // 4. kuva välja järjekorranumber HTMLs
  
  // 5. leia toode üles

  // 6. kuva toode HTMLs

  // 7. kui ei leita, siis tee early return

  const muuda = () => {
    tootedFailist[toote_jrknr] = {
      "nimi": nimiViide.current.value, 
      "hind": Number(hindViide.current.value),
       "aktiivne": aktiivsusViide.current.checked, 
       "pilt": piltViide.current.value
    }
    //suuna haldamise lehele
    navigate("/halda");
  }

  // muutmine ja kustutamine käivad AINULt järjekorranumbri alusel
  
  if ( leitudToode === undefined) {
    return (<div>Early return! (ei leia toodet)</div>)
  }

  return (
    <div>
        {/* <div>Toote nimi: { leitudToode } </div> */}
        <label>Toote nimi:</label> <br />
        <input ref={nimiViide} type="text" defaultValue={leitudToode.nimi}/> <br />
        <label>Toote pilt:</label> <br />
        <input ref={piltViide} type="text" defaultValue={leitudToode.pilt}/> <br />
        <label>Toote hind:</label> <br />
        <input ref={hindViide} type="number" defaultValue={leitudToode.hind}/> <br />
        <label>Toote aktiivsus:</label> <br />
        <input ref={aktiivsusViide} type="checkbox" defaultChecked={leitudToode.aktiivne}/> <br />
        <div>Järjekorranumber: { toote_jrknr }</div>
        <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode