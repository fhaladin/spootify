<template>
  <div class="header">
    <SvgHero />

    <div>
      <h1>Your favourite tunes</h1>
      <h2>
        All <FontAwesomeIcon icon="fa-solid fa-sun" /> and all
        <FontAwesomeIcon icon="fa-solid fa-moon" />
      </h2>
    </div>
  </div>
</template>

<script setup>
import SvgHero from "./svg/SvgHero.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/header.scss";
</style>
