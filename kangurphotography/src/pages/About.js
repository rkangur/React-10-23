import React from 'react'
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();

  return (
    <div>
        <img src="./Theo.jpg" className='TheoFoto' alt="Theo foto"/>
        <div className='formContainer'>
          <h5>{t("heading1")}</h5>
            <p>The man behind the lens is not just a photographer; he is an artist who brings a unique perspective to every photograph he takes. Born with a love for nature and animals,
              Theodor's journey into the world of photography was a natural progression. His ability to connect with his subjects, whether they be the vibrant flora and fauna of the natural world or 
              the dynamic emotions of people at events, has made him a sought-after photographer.</p>
          <h5>Photographic Expertise</h5>
            <p>At Kangur Photography, we specialize in capturing the essence of nature. Theodor's profound connection with the environment allows him to freeze moments in time, 
            showcasing the intricate beauty of the world around us. From breathtaking landscapes to the subtle nuances of wildlife behavior, every image tells a story.<br />
            In addition to nature photography, Theodor brings his expertise to events, creating timeless memories for individuals and families. 
            Whether it's a celebration, or a corporate event, Kangur Photography ensures that every significant moment is preserved with artistic flair.</p>
          <h5>Experience the Difference</h5>
            <p>Choosing Kangur Photography means choosing a photographer who is not only skilled but also passionate about the art of capturing moments.
              Whether you're seeking the beauty of nature, the energy of events, the warmth of people, or the visual appeal of real estate, 
              Theodor Kangur is dedicated to delivering images that go beyond the ordinary.</p>
            <p>Contact Kangur Photography today to discuss your photography needs and let us turn your moments into timeless works of art.</p>
        </div>
    </div>
  )
}

export default About