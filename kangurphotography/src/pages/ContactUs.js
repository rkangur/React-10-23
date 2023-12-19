import React, { useRef } from 'react'
import { TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ezcc23t', 'template_947qt4i', form.current, 'j8swCSNpbnoBd3ER5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
        <h4>Thank you for visiting our website!</h4> <br />
        <div className='formContainer'>
          <h5>Get in touch</h5><br />
          <form ref={form} onSubmit={sendEmail}>
            <TextField name="from_name" label="Name" variant="standard" /> <br /> <br />
            <TextField required name="from_email" id="filled-required"
            label="Email" variant="standard" /> <br /> <br />
            <TextField required id="filled-required"
            label="Message" name="message" variant="standard" multiline rows={4} /> <br /> <br />
            <Button type="submit" variant="contained">Send</Button> < br/> <br />
          </form>
        </div>
    </div>
  )
}

export default ContactUs