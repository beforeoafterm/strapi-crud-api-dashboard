import Logo from "./extensions/logo.png";
import Favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Favicon,
    },
    menu: {
      logo: Logo,
    },
    theme: {
      colors: {
        primary100: '#F0FFF5',
        primary200: '#D8FFDE',
        primary500: '#61CC7F',
        primary600: '#31BC4B',
        primary700: '#15A448',
      },
    },
    translations: {
      en: {
        'Auth.form.button.login.strapi': 'Log in via Dashboard',
        'admin.pages.MarketPlacePage.content.subtitle': 'The new marketplace will help you get more out of the Dashboard. We are working hard to offer the best experience to discover and install plugins.',
        'admin.pages.MarketPlacePage.content.subtitle.published': 'The web marketplace helps you get the most of your Dashboard. In addition, we are working hard to offer the best experience to discover and install plugins, directly from the app.',
        'admin.pages.MarketPlacePage.subtitle': 'Get more out of your Dashboard',
        'app.components.BlockLink.tutorial.content': 'Follow step-by-step instructions to use and customize your Dashboard.',
        'admin.pages.MarketPlacePage.subtitle': 'Get more out of your Dashboard',
        'app.components.LeftMenu.navbrand.title': 'CRUD API Manager',
        'app.components.LeftMenu.navbrand.workplace': 'Dashboard',
        'notification.version.update.message': 'A new version of the CRUD API Dashboard is available!',
      }
    },
    notifications: { release: false },
    tutorials: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
