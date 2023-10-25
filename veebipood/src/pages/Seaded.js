import React, { useState } from 'react';

function Seaded() {
    const [keel, muudaKeel] = useState(localStorage.getItem("keel") || "eesti"); //pärast refreshi viimati valitud keel (võti)

    const uuendaKeelEE = () => {
        muudaKeel("eesti");
        // locaStorage on sissekirjutatud muutuja täpselt nagu console.
        // setItem on sissekirjutatud funktsioon, 
        // mis eksisteerib localStorage-l täpselt nagu .log() eksisteerib consolel
        localStorage.setItem("keel", "eesti");
    }

    const uuendaKeelEN = () => {
        muudaKeel("inglise");
        localStorage.setItem("keel", "inglise");
    }

    const uuendaKeelRU = () => {
        muudaKeel("vene");
        localStorage.setItem("keel", "vene");
    }

    return (
        <div>
            {keel === "eesti" && <div>Leht on eestikeelne</div>}
            {keel === "inglise" && <div>The page is in English</div>}
            {keel === "vene" && <div>Страница на русском языке</div>}
            <button className={keel === "eesti" ? "aktiivne" : undefined} onClick={uuendaKeelEE}>Eesti keeles</button>
            <button className={keel === "inglise" ? "aktiivne" : undefined} onClick={uuendaKeelEN}>In english</button>
            <button className={keel === "vene" ? "aktiivne" : undefined} onClick={uuendaKeelRU}>на русском языке</button>
        </div>
    )
}

export default Seaded