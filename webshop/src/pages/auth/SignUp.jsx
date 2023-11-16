import React from 'react'
import { useTranslation } from 'react-i18next';


function SignUp() {
  const { t } = useTranslation();

  return (
    <div>
      <label>{t("email")}</label> <br/>
      <input type="text" /> <br/>
      <label>{t("password")}</label> <br/>
      <input type="text" /> <br/>
      <button>{t("nav.signup")}</button>
    </div>
  )
}

export default SignUp