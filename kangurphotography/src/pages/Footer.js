import React from 'react'
import {
    Box,
    FooterContainer,
    FooterLink
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                    <div className='links'>
                        <FooterLink target="_blank" href='https://www.facebook.com/people/Kangur-Photography/100064290332539/'>
                            <img className='image' src='/facebook.png' alt='facebook-kangurphotography'/>
                        </FooterLink>
                        <FooterLink target="_blank" href='https://www.instagram.com/kangurphotography/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
                            <img className='image' src='/instagram.png' alt='facebook-kangurphotography'/>
                        </FooterLink>
                        <FooterLink target="_blank" href='https://www.flickr.com/photos/theodorkangur/'>
                            <img className='image' src='/flickr.png' alt='flickr-kangurphotography'/>
                        </FooterLink>
                    </div>
                <p>&copy; Kangur Photography</p>
            </FooterContainer>
        </Box>
    );
};
export default Footer;