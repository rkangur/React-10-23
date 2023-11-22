import React from 'react'
import '../../App.css';

export const  NotFound = () => {
  return (
    <div>
      <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <div>404 Page Not Found </div>
    </div>
  )
}

// default - võta kõik, ilma - võta tk-na NB! impordile {} ümber kui tk-na
export const  NotFound2 = () => {
  return (
    <div>
      <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <div>Ei leitud!</div>
    </div>
  )
}
