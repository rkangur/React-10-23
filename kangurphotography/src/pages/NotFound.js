import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <img src='/person.png' alt='404 Not Found'/> <br />
        <div>Thank you for your patience.</div>
        <div> Please write us <Link to='/contact'>here</Link> how we can be of further assistance for You!</div>
    </div>
  )
}

export default NotFound