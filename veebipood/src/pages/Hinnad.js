import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([11,22,55,44,8,123,23,3,9]);

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b); //vastupidi b - a aga a, b alguses sama
    uuendaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui30 = () => {
    const vastus = hinnad.filter(hind => hind > 30);
    uuendaHinnad(vastus);
  }

  return (
    <div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={filtreeriSuuremadKui30}>Filtreeri suuremad kui 30</button>
      {hinnad.map(hind => <div>{hind}</div> )}
    </div>
  )
}

export default Hinnad