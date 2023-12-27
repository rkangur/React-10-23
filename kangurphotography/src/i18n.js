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
      "getInTouch" : "Get In Touch:",
      "thankYou" : "Thank You!",
      "heading1" : "Meet Theodor Kangur, a seasoned photographer with a keen eye for the beauty that surrounds us.",
      "paragraf1" : "The man behind the lens is not just a photographer; he is an artist who brings a unique perspective to every photograph he takes. Born with a love for nature and animals, Theodor's journey into the world of photography was a natural progression. His ability to connect with his subjects, whether they be the vibrant flora and fauna of the natural world or the dynamic emotions of people at events, has made him a sought-after photographer.",
      "paragraf2" : "At Kangur Photography, we specialize in capturing the essence of nature. Theodor's profound connection with the environment allows him to freeze moments in time, showcasing the intricate beauty of the world around us. From breathtaking landscapes to the subtle nuances of wildlife behavior, every image tells a story. In addition to nature photography, Theodor brings his expertise to events, creating timeless memories for individuals and families. Whether it's a celebration, or a corporate event, Kangur Photography ensures that every significant moment is preserved with artistic flair.",
      "paragraf3" : "Choosing Kangur Photography means choosing a photographer who is not only skilled but also passionate about the art of capturing moments. Whether you're seeking the beauty of nature, the energy of events, the warmth of people, or the visual appeal of real estate, Theodor Kangur is dedicated to delivering images that go beyond the ordinary.",
      "paragraf4" : "Contact Kangur Photography today to discuss your photography needs and let us turn your moments into timeless works of art.",
      "heading2" : "Photographic Expertise",
      "heading3" : "Experience the Difference",
      "toastMessage" : "Field is required!"
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
        "getInTouch" : "Võtke meiega ühendust:",
        "thankYou" : "Täname!",
        "heading1" : "Theodor Kangur - kogenud fotograaf, kes jäädvustab meid ümbritsevat ilu.",
        "heading2" : "Fotograafia",
        "heading3" : "Märgake erinevust",
        "paragraf1" : "Objektiivi taga olev mees ei ole ainult fotograaf; ta on kunstnik, kes toob igale tehtud fotole ainulaadse vaatenurga. Armastusega looduse ja loomade vastu oli Theodori teekond fotograafiamaailma loomulik. Tema võime luua sidet oma pildistatavatega, olgu need siis loodusmaailma elava taimestiku ja loomastiku või inimeste emotsioonid sündmustel, on teinud temast nõutud fotograafi.",
        "paragraf2" : "Kangur Photography's oleme spetsialiseerunud looduse olemuse jäädvustamisele. Theodori sügav side keskkonnaga võimaldab tal hetked ajas külmutada, näidates ümbritseva maailma ilu. Alates hingematvatest maastikest kuni metsloomade käitumise peente nüanssideni; iga pilt jutustab lugu. Lisaks loodusfotograafiale toob Theodor oma asjatundlikkuse sündmustesse, luues nii üksikisikutele kui ka peredele ajatuid mälestusi. Olgu see pidu või firmaüritus, Kangur Photography tagab, et iga oluline hetk säilib kunstilise hõnguga.",
        "paragraf3" : "Kangur Photography valimine tähendab fotograafi valimist, kes pole mitte ainult osav, vaid ka kirglik hetkede jäädvustamise kunsti vastu. Kui otsite looduse ilu, sündmuste energiat, inimeste soojust või kinnisvara visuaalset atraktiivsust, Theodor Kangur on pühendunud maagiliste piltide pakkumisele.",
        "paragraf4" : "Võtke ühendust Kangur Photography'ga juba täna, et arutada oma fotograafiavajadusi ja lasta meil muuta teie hetked ajatuteks kunstiteosteks.",
        "toastMessage" : "Palun täitke väli!"
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