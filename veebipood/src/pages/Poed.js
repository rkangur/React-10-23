import React, { useState } from 'react'

// arraysid kohustulik kasutada kui toodete juures sorteerida/filtreerida

function Poed() {
    const [poed, muudaPoed] = useState(["Viimsi", "Magistrali", "Kristiine", "Ülemiste", "Rocca al Mare", "Järve"]);

    const sorteeriAZ = () => {
        poed.sort();
        muudaPoed(poed.slice()); // slice kustutab ära mälukoha
    }

    const sorteeriZA = () => {
        poed.sort((a,b) => b.localeCompare(a)); // võrdleb a ja b (sõnade võrdlemine)
        muudaPoed(poed.slice()); // slice kustutab ära mälukoha
    }

    const filtreeriKesSisaldabIsLyhendit = () => {
        const vastus = poed.filter(yksPood => yksPood.includes("is"));
        muudaPoed(vastus);
    }

    const filtreeriEgaLoppevad = () => {
        const vastus = poed.filter(yksPood => yksPood.endsWith("e"));
        muudaPoed(vastus);
    }

    const originaali = () => {
        muudaPoed(["Viimsi", "Magistrali", "Kristiine", "Ülemiste", "Rocca al Mare", "Järve"]);
    }

    return (
        <div>
            <button onClick={originaali}>Tagasi originaali</button>
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={filtreeriEgaLoppevad}>Filtreeri E-ga lõppevad</button>
            <button onClick={filtreeriKesSisaldabIsLyhendit}>Filtreeri "is" lühend</button>
            {/*kuvab listist ükshaaval välja*/}
            {poed.map(yksPood => <div className='pood'>{yksPood}</div>)}

        </div>
    )
}

export default Poed