import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";

import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: colors.cyan.base,
        secondary: colors.cyan.lighten4,
        accent: colors.cyan.darken3,
      },
    },
  },
});
