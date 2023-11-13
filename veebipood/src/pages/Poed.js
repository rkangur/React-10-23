import React, { useState, useRef } from 'react';
import poedFailist from "../data/poed.json";
import { Link } from 'react-router-dom';

// arraysid kohustulik kasutada kui toodete juures sorteerida/filtreerida

function Poed() {
    const [poed, muudaPoed] = useState(poedFailist.slice());
    const poodViide = useRef(); // viide <- tõlge referencist, mis on ref lühend
    const telViide = useRef();
    const aadrViide = useRef();

    const sorteeriAZ = () => {
        poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
        muudaPoed(poed.slice()); // slice kustutab ära mälukoha
    }

    const sorteeriZA = () => {
        poed.sort((a,b) => b.nimi.localeCompare(a.nimi)); // võrdleb a ja b (sõnade võrdlemine)
        muudaPoed(poed.slice()); // slice kustutab ära mälukoha
    }

    const sorteeriTahedKasvavalt = () => {
        poed.sort((a,b) => a.nimi.length - b.nimi.length);
        muudaPoed(poed.slice());
    }

    const sorteeriTahedKahanevalt = () => {
        poed.sort((a,b) => b.nimi.length - a.nimi.length);
        muudaPoed(poed.slice());
    }

    const sorteeribKolmandaTaheJargi = () => {
        poed.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));
        muudaPoed(poed.slice());
    }

    const sorteeriSonadeArvuJargi = () => {
        poed.sort((a,b) => a.nimi.split(" ").length - b.nimi.split(" ").length);
        muudaPoed(poed.slice());
    }

    const filtreeriKesSisaldabIsLyhendit = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.includes("is"));
        muudaPoed(vastus);
    }

    const filtreeriEgaLoppevad = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.endsWith("e"));
        muudaPoed(vastus);
    }

    const originaali = () => {
        muudaPoed(poedFailist.slice());
    }

    const filtreeriKellelOn9Tahte = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.length === 9);
        muudaPoed(vastus);
    }

    const filtreeriKellelOnVahemalt7Tahte = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.length >= 7);
        muudaPoed(vastus);
    }

    const filtreeriKellelOnKolmasTahtI = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi[2] === "i");
        muudaPoed(vastus);
    }

    const filtreeriKellelOnRohkemKui1Sona = () => {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.split(" ").length > 1);
        muudaPoed(vastus);
    }

    // 1. Poed.js failis, lisa 2 labelit ja inputi juurde (aadress ja telefon)
    // 2. Lisa 2 useRefi juurde mõlemale uuele inputile
    // 3. Pushi objekt
    // 4. Kui pushid, siis võtmete väärtused tulevad ref.current.value kaudu


    const lisa = () => {
        poed.push( {
             "nimi": poodViide.current.value,
             "aadr": aadrViide.current.value,
              "tel": telViide.current.value
            }
        );
        muudaPoed(poed.slice());
    }

    const kustuta = (index) => {
        poed.splice(index, 1); // mitmendat, mitu tk
        muudaPoed(poed.slice());
    }

    // render <-- HMTLi väljakuvamine
    // re-render <-- HTMLi uuendamine (useState funktsiooni abil)

    const arvutaTahedKokku = () => {
        let summa = 0;
        poed.forEach(yksPood => summa = summa + yksPood.nimi.length);
        return summa; 
    }

    return (
        <div>
            <div>{arvutaTahedKokku()}</div>
            <div>{poed.length} tk</div> <br/>
            <label>Pood</label> <br />
            <input ref={poodViide} type="text" /> <br /> <br />
            <label>Aadress</label> <br />
            <input ref={aadrViide} type="text" /> <br /> <br />
            <label>Telefon</label> <br />
            <input ref={telViide} type="text" /> <br /> <br />
            <button onClick={lisa}>Lisa</button>
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
            { poed.map((yksPood, index) => 
                <div key={yksPood.nimi} className='pood'>
                    {yksPood.nimi}
                    <button onClick={() => kustuta(index)}>x</button>
                    <Link to={"/yksik-pood/" + index}>
                        <button>Vaata detailsemalt</button>
                    </Link>
                </div>)
            }
        </div>
    )
}

export default Poed

// antakse tööülesanne
// 1. vaata sellest samast projektist kus arendust tegema peab, kas on sarnast asja tehtud
// 2. otsi enda olemasolevatest projektidest näidet, kas oled sama asja teinud
// 3. googelda, küsi chatGPT
// 4. töökaaslane