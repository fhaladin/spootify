import { createApp } from "vue";
import VueCookies from "vue-cookies";

import router from "./router";

import App from "./App.vue";
import "./assets/scss/_main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSun,
  faMoon,
  faStepBackward,
  faPlayCircle,
  faStepForward,
  faEllipsisH,
  faHeart,
  faRandom,
  faRetweet,
  faVolumeDown,
  faHeadphonesAlt,
  faSearch,
  faStream,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSun,
  faMoon,
  faStepBackward,
  faPlayCircle,
  faStepForward,
  faEllipsisH,
  faHeart,
  faRandom,
  faRetweet,
  faVolumeDown,
  faHeadphonesAlt,
  faSearch,
  faStream,
  faChevronLeft,
  faChevronRight
);

export const app = createApp(App);

app.use(router);
app.use(VueCookies);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
