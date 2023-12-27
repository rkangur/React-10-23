import React, { useRef, useState } from 'react'
import { TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const { t } = useTranslation();
  const [btnClicked, setBtnClicked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ezcc23t', 'template_947qt4i', form.current, 'j8swCSNpbnoBd3ER5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const btnIsClicked = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    setBtnClicked(true);
  }

  return (
    <div>
        { (btnClicked === false) ? <div><h5>{t("getInTouch")}</h5></div> : <div><h4>{t("thankYou")}</h4> <br /> </div>}
        <div className='formContainer'>
          <form ref={form} onSubmit={sendEmail}>
            <TextField name="from_name" label={t("name")} inputRef={nameRef} variant="standard" /> <br /> <br />
            <TextField required name="from_email" inputRef={emailRef} id="filled-required"
            label={t("email")} variant="standard" />  <br /> <br />
            <TextField required inputRef={messageRef} id="filled-required"
            label={t("message")} name="message" variant="standard" multiline rows={4} /> <br /> <br />
            <Button type="submit" variant="contained" onClick={() => btnIsClicked()}>{t("send")}</Button> < br/> <br />
          </form>
          <ToastContainer />
        </div>
    </div>
  )
}

export default ContactUs