import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin.shops": "Edit shops",
      "admin.categories": "Edit categories",
      "admin.add-product": "Add new product",
      "admin.edit-delete-products": "Edit/delete products",
      "nav.shops": "Our shops",
      "nav.admin": "To admin view",
      "nav.contact": "Contact us",
      "nav.cart": "Cart",
      "nav.login": "Log in",
      "nav.signup": "Create user",
      "email": "E-mail",
      "password": "Password"
    }
  },
  ee: {
    translation: {
        "admin.shops": "Muuda poode",
        "admin.categories": "Muuda kategooriaid",
        "admin.add-product": "Lisa toode",
        "admin.edit-delete-products": "Muuda/kustuta tooteid",
        "nav.shops": "Poed",
        "nav.admin": "Admin vaatesse",
        "nav.contact": "Kontakt",
        "nav.cart": "Ostukorv",
        "nav.login": "Logi sisse",
        "nav.signup": "Registreeru",
        "email": "E-mail",
        "password": "Parool"
        
    }
  },
  ru: {
    translation: {
        "admin.shops": "Смена магазинов",
        "admin.categories": "Изменение категорий",
        "admin.add-product": "Добавить товар",
        "admin.edit-delete-products": "Редактировать/удалять товары",
        "nav.shops": "Магазины",
        "nav.admin": "Представление администратора",
        "nav.contact": "Контакт",
        "nav.cart": "Телега",
        "nav.login": "Войти",
        "nav.signup": "Регистрировать",
        "email": "электронная почта",
        "password": "пароль"
        
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;