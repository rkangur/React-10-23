import React from 'react'
import { useState, useEffect } from 'react';

function ParcelMachines() {

    const [parcelMachines, setParchelMachines] = useState([]);

    // uef - lehele tulles tehakse koheselt API päring (1x)
    // esimene response võtab kogu tagastuse, mis järgmise reale sisendiks (set uuendab 1x HTML lehte)
    useEffect(() => {
      fetch('https://www.omniva.ee/locations.json')
        .then(response => response.json())
        .then(json => setParchelMachines(json))
    }, []);

    return (
        <select>{parcelMachines
                    .filter(pm => pm.NAME !== "1. eelistus/Picapac pakiautomaat")
                    .filter(pm => pm.A0_NAME === "EE")
                    .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
        </select>
    )
}

export default ParcelMachines