import { useEffect, useState } from 'react';
import Map from '../../components/Map';
import { Button } from '@mui/material';

function Shops() {
  const [coordinates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [coordinatesDb, setCoordinatesDb] = useState([]);

  // võtta andmebaasist kõik poed ja kuvada neid välja ning kontrollida kas click toimib (alumised 3 mapi abil andmebaasist)
  useEffect(() => {
    fetch('https://raheli-veebipood-default-rtdb.europe-west1.firebasedatabase.app/shops.json')
      .then(response => response.json())
      .then(json => {
        setCoordinatesDb(json || []);
      })
  }, []);
  
  return (<div>
    <Button onClick={() => setCoordinates({lngLat: [58.6942, 25.9077], zoom: 5})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>

    {/* <Button onClick={() => setCoordinates({lngLat: [59.4218, 24.7936], zoom: 13})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4271, 24.7236], zoom: 13})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3778, 26.7309], zoom: 13})}>Tasku keskus</Button>
    <Button onClick={() => setCoordinates({lngLat: [60.1617, 24.9362], zoom: 13})}>Helsinki</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3874, 24.5014], zoom: 13})}>Pärnu</Button> */}

    <Map mapCoordinaates={coordinates}  />

    <div className='products'>
    {coordinatesDb.map(coordinate => 
        <div>
          <div>Poe nimi: {coordinate.name}</div> 
          <div>Asukoht: {coordinate.address}</div>
          <div>Lahtioleku aeg: {coordinate.opentime}</div> 
          <div>Veebileht: {coordinate.urlShop}</div> <br />
        </div>)}
    </div>
  </div>)
}

export default Shops;