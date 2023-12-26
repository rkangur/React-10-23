import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "nav.about" : "About",
      "nav.portfolio" : "Portfolio",
      "nav.contact" : "Contact",
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "send" : "Send",
      "getInTouch" : "Get In Touch",
      "thankYou" : "Thank You!",
      "heading1" : "Meet Theodor Kangur, a seasoned photographer with a keen eye for the beauty that surrounds us."
    }
  },
  ee: {
    translation: {
        "nav.about" : "Meist",
        "nav.portfolio" : "Portfoolio",
        "nav.contact" : "Kontakt",
        "name": "Nimi",
        "email": "Meiliaadress",
        "message": "Sõnum",
        "send" : "Saada",
        "getInTouch" : "Võta meiega ühendust",
        "thankYou" : "Aitäh!",
        "heading1" : "Saage tuttavaks Theodor Kanguriga, kogenud fotograafiga, kellel terav silm."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", 

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;