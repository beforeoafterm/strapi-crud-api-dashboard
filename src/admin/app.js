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
    notifications: { release: false },
    tutorials: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
