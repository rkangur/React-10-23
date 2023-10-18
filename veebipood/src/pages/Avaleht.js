import React, { useState } from 'react'

function Avaleht() {
    //vasakpoolne sõna läheb HTMLi loogeliste sulgude sisse
    // parempoolse sõna (funktsiooni) abil uuendatakse vasakpoolset ja HTMLi korraga
    const [kogus, muudaKogus] = useState(7);
    const [laigitud, uuendaLaigitud] = useState(false); 
    const [sonum, m22raSonum] = useState("Muuda kogust!");

    function nulli() {
        m22raSonum("Nullitud!");
        muudaKogus(0);
    }

    function v2henda() {
        m22raSonum("Vähendatud!");
        muudaKogus(kogus - 1);
    }

    function suurenda() {
        m22raSonum("Suurendatud!");
        muudaKogus(kogus + 1);
        // () => on onClick sees, siin ei pea
    }

  return (

    <div>
        <div>{sonum}</div>
        {laigitud === true && kogus < 10 && <img src="/laigitud.svg" alt="" onClick={() => m22raSonum("Punane süda - laigitud aga vähem kui 10 tk")} />}
        {laigitud === false && <img src="/mittelaigitud.svg" alt="" onClick={() => m22raSonum("Läbipaistev süda - laikimata")}/>}
        {laigitud === true && kogus >= 10 && <img src="/legendaarne.svg" alt="" onClick={() => m22raSonum("Kuldne süda - laigitud ja kogus 10 või rohkem")}/>}
        <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda laigitut</button>
        <br />
        <br />

        {/* {kogus > 0 && <button onClick={() => uuendaKogus(0)}>Nulli</button>} */}
        <button disabled={kogus === 0} onClick={() => nulli()}>Nulli</button>
        <br />
        {kogus > 0 && <button onClick={() => v2henda()}>-</button>}
        <span> Kokku: {kogus} tk </span>
        {<button onClick={() => suurenda()}>+</button>}
    </div>
  )
}

export default Avaleht