import React from 'react'

function About() {
  return (
    <div>
        <h3>Thank you for visiting my website! </h3>
        <p>kangurphotography@gmail.com</p>
        <p>You can also find my work here:</p>
        <a href='https://www.facebook.com/people/Kangur-Photography/100064290332539/'>
            <img className='image' src='/facebook.png' alt='facebook-kangurphotography'/>
        </a>
        <a href='https://www.instagram.com/kangurphotography/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
            <img className='image' src='/instagram.png' alt='facebook-kangurphotography'/>
        </a>
        <a href='https://www.flickr.com/photos/theodorkangur/'>
            <img className='image' src='/flickr.png' alt='flickr-kangurphotography'/>
        </a>
    </div>
  )
}

export default About