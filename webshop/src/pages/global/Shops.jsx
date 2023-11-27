import { useState } from 'react';
import Map from '../../components/Map';
import { Button } from '@mui/material';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  // KODUS: Teha Helsinki ja Pärnusse ka pood juurde
  
  return (<div>
    <Button onClick={() => setCoordinates({lngLat: [58.6942, 25.9077], zoom: 6})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>

    <Button onClick={() => setCoordinates({lngLat: [59.4218, 24.7936], zoom: 13})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4271, 24.7236], zoom: 13})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3778, 26.7309], zoom: 13})}>Tasku keskus</Button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;