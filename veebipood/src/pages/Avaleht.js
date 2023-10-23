import React, { useState } from 'react'

// tumesinine - JavaScriptis määratlus: function, const, let ja reserveeritud sõnad: false, true, undefined, null
//              HTMLs: <div> <a> <p> <button> 
// tavaline sinine - Javascriptis muutujad (oleme need ise loonud)
//                   HTMLs muutujad (oleme need loonud JavaScriptis)
// helesinine - JavaScriptis sissekirjutatud muutujad  console.log()  localStorage.getItem()
//              HTMLs omadus (nt. inputilugeri omadus)
// kollane - funktsioon, sulud käivad lõppu, mida on võimalik korduvalt välja kutsuda
// oranž - jutumärkides sõnad
// tumeroheline - kommentaar
// heleroheline - numbrilised väärtused
// valged - märgid, HTMLs väljanäidatav tekst
// lillad - tegevused, import, export, return, if, else

// loogelised sulud {} - JS koodiblokk function {} if {} else {}
//                       HTML: JS ehk dünaamika koodiblokk
//                       on useBLABLA ees kui muutujate arv on valikuline
// tavalised sulud - funktsiooni väljakutse Avaleht () muudaKogus(5) if() <-- kontroll
// kandilised sulud - useState juures, sellepärast et meil läheb TÄPSELT kahte vaja: mmuutujat ja funktsiooni
// ; - semikoolon kui rea lõpetaja, pole kohustuslik aga suur osa ettevõtetest paneb kohustuslikuks
// = väärtuse andja, = useState, disabeld={}, onClick={}
// === - vasak ja parem pool on võrdsed
// > < <= >= suurem, väiksem, väiksem võrdne, suurem võrdne
// && - kui vasakpool on tõde. soos parem pool on nähtav
// ! - keerab väärtust tagurpidi
// () => funktsiooni tähis HTMLs kui tehakse onClick

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
        <span className={kogus >= 10 ? 'kuldne' : undefined}> Kokku: {kogus} tk </span>
        {<button onClick={() => suurenda()}>+</button>}
    </div>
  )
}

export default Avaleht