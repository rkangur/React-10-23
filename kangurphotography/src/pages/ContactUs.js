import React, { useRef } from 'react'
import { TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const form = useRef();
  const { t, i18n } = useTranslation();

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
        <h4>{t("thankYou")}</h4> <br />
        <div className='formContainer'>
          <h5>{t("getInTouch")}</h5><br />
          <form ref={form} onSubmit={sendEmail}>
            <TextField name="from_name" label={t("name")} variant="standard" /> <br /> <br />
            <TextField required name="from_email" id="filled-required"
            label={t("email")} variant="standard" /> <br /> <br />
            <TextField required id="filled-required"
            label={t("message")} name="message" variant="standard" multiline rows={4} /> <br /> <br />
            <Button type="submit" variant="contained">{t("send")}</Button> < br/> <br />
          </form>
        </div>
    </div>
  )
}

export default ContactUs