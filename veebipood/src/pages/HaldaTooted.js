import React, { useState } from 'react'
import tootedFailist from '../data/tooted.json'
import { Link } from 'react-router-dom';
// 1. impordi tooted failist

function HaldaTooted() {
    const [tooted, uuendaTooted] = useState(tootedFailist);
    // 2. kuva kõik tooted .map() alusel HTMLs välja (Tooted.js failis on näide)

    // 3. (ei ole prioriteet) võimalda toodet failist kustutada (Ostukorv.js failis on näide)

    // 4. kustutamise nupu kõrvale "vaata detailsemalt" nupp , aga tekstiks "muuda", mis viib aadressile:
    // <Route path="muuda-toode/:toote_jrknr" element={ <MuudaToode /> } />

    const kustuta = (indeks) => {
        tooted.splice(indeks, 1);
        uuendaTooted(tooted.slice());
    }


    return (
        <div>
            { tooted.map((yksToode, indeks) =>
                <div key={indeks}>
                <div>{yksToode.nimi}</div>
                <div>{yksToode.hind}</div>
                <div>{yksToode.pilt}</div>
                <button onClick={() => kustuta(indeks)}>Kustuta toode</button>
                <Link to={"/muuda-toode/" + indeks}>
                    <button>Muuda</button>
                </Link>
                </div>)
            }

        </div>
    )
}

export default HaldaTooted