import React from 'react'
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div>
        <img src="./Theo.jpg" className='TheoFoto' alt="Theo foto"/>
        <div className='formContainer'>
          <h5>{t("heading1")}</h5>
            <p>{t("paragraf1")}</p>
          <h5>{t("heading2")}</h5>
            <p>{t("paragraf2")}</p>
          <h5>{t("heading3")}</h5>
            <p>{t("paragraf3")}</p>
            <p>{t("paragraf4")}</p>
        </div>
    </div>
  )
}

export default About