<template>
  <div class="sidebar">
    <div class="sidebar__profile">
      <SvgAvatar />
      <p>Bob Smith</p>
    </div>

    <div class="sidebar__options">
      <RouterLink
        v-for="(menu, index) in menus"
        :key="`menu-${index}`"
        to="/"
        v-slot="{ href, navigate }"
        custom
      >
        <div
          role="link"
          class="sidebar__option"
          :class="{ 'sidebar__option--selected': index === 0 }"
          :href="href"
          @click="navigate"
          @keypress.enter="navigate"
        >
          <FontAwesomeIcon :icon="`fa-solid fa-${menu.icon}`" />
          <p>{{ menu.text }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgAvatar from "./svg/SvgAvatar.vue";

const menus = ref([
  { icon: "headphones-alt", text: "Discover" },
  { icon: "search", text: "Search" },
  { icon: "heart", text: "Favourites" },
  { icon: "play-circle", text: "Playlists" },
  { icon: "stream", text: "Charts" },
]);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar.scss";
</style>
