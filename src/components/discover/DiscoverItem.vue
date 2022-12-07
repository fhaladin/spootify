<template>
  <div class="discover-item animate__animated animate__fadeIn">
    <div v-if="loading" class="discover-item__art loading" />
    <div
      v-else
      class="discover-item__art"
      :style="`background-image: url(${data.image})`"
    />

    <div v-if="loading" class="discover-item__title loading" />
    <p v-else class="discover-item__title">{{ data.name }}</p>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
  loading: Boolean,
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/discover/discover-item.scss";
</style>
