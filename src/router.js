import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/index.vue";
import Search from "@/pages/search.vue";
import Favourites from "@/pages/favourites.vue";
import Playlists from "@/pages/playlists.vue";
import Charts from "@/pages/charts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/search", component: Search },
    { path: "/favourites", component: Favourites },
    { path: "/playlists", component: Playlists },
    { path: "/charts", component: Charts },
  ],
});

export default router;
