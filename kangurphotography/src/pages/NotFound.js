import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='formContainer'>
        <img className='imageBcground' src='/person.png' alt='404 Not Found' height="auto" width="40%" id="image-section"/> <br />
        <p>Thank you for your patience.</p>
        <p> Please write us <Link to='/contact'>here</Link> how we can be of further assistance for you!</p>
    </div>
  )
}

export default NotFound