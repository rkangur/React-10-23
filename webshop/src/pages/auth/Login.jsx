import React from 'react'
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();

  return (
    <div>
      <label>{t("email")}</label> <br/>
      <input type="text" /> <br/>
      <label>{t("password")}</label> <br/>
      <input type="text" /> <br/>
      <button>{t("nav.login")}</button>
    </div>
  )
}

export default Login