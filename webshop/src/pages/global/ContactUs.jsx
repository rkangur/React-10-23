import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button } from '@mui/material';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8xl0n5j', 'template_0cx5gnl', form.current, 'FTPdrHZ52PQHDl6H-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" name="from_name" /> */}
      <TextField name="from_name" label="Name" variant="filled" />
      <TextField name="from_email" label="Email" variant="filled" />
      {/* <label>Message</label>
      <textarea name="message" /> */}
      <TextField name="message" label="Message" variant="filled" /> 
      <Button type="submit" variant="outlined">Send</Button> < br/>
    </form>
  );
};