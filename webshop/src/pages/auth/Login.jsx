import React from 'react'
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../store/AuthContext';

function Login() {
  const { t } = useTranslation();
  const { login } = useAuth();

  return (
    <div>
      <label>{t("email")}</label> <br/>
      <input type="text" /> <br/>
      <label>{t("password")}</label> <br/>
      <input type="text" /> <br/>
      <button onClick={login}>{t("nav.login")}</button>
    </div>
  )
}

export default Login