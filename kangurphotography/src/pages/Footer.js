import React from 'react'
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                {/* <Row>
                     <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Team
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            People
                        </FooterLink>
                        <FooterLink href="#">
                            Events
                        </FooterLink>
                        <FooterLink href="#">
                            Nature
                        </FooterLink>
                        <FooterLink href="#">
                            Real estate
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            kangurphotography@gmail.com
                        </FooterLink>
                        <FooterLink href="#">
                            Tallinn, Estonia
                        </FooterLink>
                    </Column>
                </Row> */}
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