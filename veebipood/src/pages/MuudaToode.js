import React from 'react'
import tootedFailist from '../data/tooted.json'
import { useParams } from 'react-router-dom';
// 1. impordi tooted failist

function MuudaToode() {
  // 2. võta URLi muutuna useParams abiga
  const {toote_jrknr} = useParams();
  const leitudToode = tootedFailist[toote_jrknr];

  // 3. loo mall HTMLi ehk tekstiväljad, kus sees on muutuvad kohad

  // 4. kuva välja järjekorranumber HTMLs
  
  // 5. leia toode üles

  // 6. kuva toode HTMLs

  // 7. kui ei leita, siis tee early return

  if ( leitudToode === undefined) {
    return (<div>Early return! (ei leia toodet)</div>)
  }

  return (
    <div>
        <div>Toote nimi: { leitudToode } </div>
        <div>Järjekorranumber: { toote_jrknr }</div>
    </div>
  )
}

export default MuudaToode