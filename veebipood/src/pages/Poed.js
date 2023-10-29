import React, { useState } from 'react';
import poedFailist from "../data/poed.json";

// arraysid kohustulik kasutada kui toodete juures sorteerida/filtreerida

function Poed() {
    const [poed, muudaPoed] = useState(poedFailist);

    const sorteeriAZ = () => {
        poed.sort();
        muudaPoed(poed.slice()); // slice kustutab ära mälukoha
    }

    const sorteeriZA = () => {
        poed.sort((a,b) => b.localeCompare(a)); // võrdleb a ja b (sõnade võrdlemine)
        muudaPoed(poed.slice()); // slice kustutab ära mälukoha
    }

    const sorteeriTahedKasvavalt = () => {
        poed.sort((a,b) => a.length - b.length);
        muudaPoed(poed.slice());
    }

    const sorteeriTahedKahanevalt = () => {
        poed.sort((a,b) => b.length - a.length);
        muudaPoed(poed.slice());
    }

    const sorteeribKolmandaTaheJargi = () => {
        poed.sort((a,b) => a[2].localeCompare(b[2]));
        muudaPoed(poed.slice());
    }

    const sorteeriSonadeArvuJargi = () => {
        poed.sort((a,b) => a.split(" ").length - b.split(" ").length);
        muudaPoed(poed.slice());
    }

    const filtreeriKesSisaldabIsLyhendit = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.includes("is"));
        muudaPoed(vastus);
    }

    const filtreeriEgaLoppevad = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.endsWith("e"));
        muudaPoed(vastus);
    }

    const originaali = () => {
        muudaPoed(poedFailist);
    }

    const filtreeriKellelOn9Tahte = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.length === 9);
        muudaPoed(vastus);
    }

    const filtreeriKellelOnVahemalt7Tahte = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.length >= 7);
        muudaPoed(vastus);
    }

    const filtreeriKellelOnKolmasTahtI = () => {
        const vastus = poedFailist.filter(yksPood => yksPood[2] === "i");
        muudaPoed(vastus);
    }

    const filtreeriKellelOnRohkemKui1Sona = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.split(" ").length > 1);
        muudaPoed(vastus);
    }


    return (
        <div>
            <br /><br />
            <button onClick={originaali}>Tagasi originaali</button>
            <br /><br />
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={sorteeriTahedKasvavalt}>Sorteeri Tähed kasvavalt</button>
            <button onClick={sorteeriTahedKahanevalt}>Sorteeri Tähed kahanevalt</button>
            <button onClick={sorteeribKolmandaTaheJargi}>Sorteeri Tähed kolmanda tähe järgi</button>
            <button onClick={sorteeriSonadeArvuJargi}>Sorteeri sõnade arvu järgi</button>
            <br /><br />
            <button onClick={filtreeriEgaLoppevad}>Filtreeri E-ga lõppevad</button>
            <button onClick={filtreeriKesSisaldabIsLyhendit}>Filtreeri "is" lühend</button>
            <button onClick={filtreeriKellelOnKolmasTahtI}>Filtreeri kellel on kolmas täht "i"</button>
            <button onClick={filtreeriKellelOn9Tahte}>Filtreeri kellel on 9 tähte</button>
            <button onClick={filtreeriKellelOnVahemalt7Tahte}>Filtreeri kellel on vähemalt 7 tähte</button>
            <button onClick={filtreeriKellelOnRohkemKui1Sona}>Filtreeri kellel on rohkem kui 1 sõna</button>
            {/*kuvab listist ükshaaval välja*/}
            { poed.map(yksPood => <div className='pood'>{yksPood}</div>)}

        </div>
    )
}

export default Poed

// antakse tööülesanne
// 1. vaata sellest samast projektist kus arendust tegema peab, kas on sarnast asja tehtud
// 2. otsi enda olemasolevatest projektidest näidet, kas oled sama asja teinud
// 3. googelda, küsi chatGPT
// 4. töökaaslane