import React from 'react'
import { useParams } from 'react-router-dom'
import poedFailist from '../data/poed.json'

function YksPood() {
    const {poe_indeks} = useParams();
    // useParams on URL muutuvate kohtade kättesaamiseks
    const leitudPood = poedFailist[poe_indeks];

    if ( leitudPood === undefined) {
        return (<div>Poodi ei leitud!</div>)
    }

    return (
        <div>
            <div>Poe nimi: { poe_indeks } </div>
            <div>Järjekorranumber: { leitudPood }</div>
            <div>Poe telefon: POE_TELEFON</div>
            <div>Aadress: POE_AADRESS</div>
        </div>
    )
}

export default YksPood

// hookid:
  // useState - andmete muutmiseks HTMLs
  // useRef - inputi seest väärtuste kättesaamiseks
  // useParams - URLst muutujate kättesaamiseks
  // useNavigate - navigeeri mitte HTMLs vaid JavaScripti poole peal uuele URL-le
  // useTranslation - tõlkimiseks
  // useEffect - API päringuteks ehk teistesse rakendustesse ligi pääsemiseks
  //            Omniva pakiautomaadid
  // useContext - andmete failide vahel saatmiseks

  // Hookide Reeglid:
  // 1. algavad use algusega, selle on React ise valinud
  // 2. peab importima
  // 3. neil peavad olema sulud lõpus
  // 4. nad ei tohi olla funktsiooni sees loodud
  // 5. nad ei tohi olla tingimuslikult loodud