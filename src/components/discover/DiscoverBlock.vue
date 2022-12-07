<template>
  <div class="discover-block">
    <div class="discover-block__header">
      <h2>{{ text }}</h2>
      <span />

      <div v-if="data.length > 0" class="animate__animated animate__fadeIn">
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-left"
          @click="scrollContainer(id, { isNegative: true })"
        />
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-right"
          @click="scrollContainer(id)"
        />
      </div>
    </div>

    <div class="discover-block__row" :id="id">
      <template v-if="data.length > 0">
        <DiscoverItem v-for="item in data" :key="item.id" :data="item" />
      </template>

      <template v-else>
        <DiscoverItem v-for="i in 12" :key="`loading-${i}`" loading />
      </template>
    </div>
  </div>
</template>

<script setup>
import DiscoverItem from "@/components/discover/DiscoverItem.vue";

defineProps({
  text: String,
  id: String,
  data: Array,
});

const scrollContainer = (id, { isNegative } = {}) => {
  const scrollableContainer = document.getElementById(id);
  const amount = isNegative
    ? -scrollableContainer.offsetWidth
    : scrollableContainer.offsetWidth;

  scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/discover/discover-block.scss";
</style>
