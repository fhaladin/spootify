<template>
  <div className="discover">
    <DiscoverBlock id="released" text="RELEASED THIS WEEK" :data="released" />
    <DiscoverBlock id="featured" text="FEATURED PLAYLISTS" :data="featured" />
    <DiscoverBlock id="browse" text="BROWSE" :data="browse" />
  </div>
</template>

<script setup>
import DiscoverBlock from "@/components/discover/DiscoverBlock.vue";

import { onMounted, ref } from "vue";
import { get } from "@/utils/api";

let released = ref([]);
let featured = ref([]);
let browse = ref([]);

onMounted(async () => {
  try {
    const dataMapping = (item) => {
      return {
        id: item.id,
        name: item.name,
        image: item.images[0].url,
      };
    };

    const { data: releasedData } = await get("/v1/browse/new-releases");
    released.value = releasedData.albums.items.map(dataMapping);

    const { data: featuredData } = await get("/v1/browse/featured-playlists");
    featured.value = featuredData.playlists.items.map(dataMapping);

    const { data: categoriesData } = await get("/v1/browse/categories");
    browse.value = categoriesData.categories.items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        image: item.icons[0].url,
      };
    });
  } catch (error) {
    console.log("__FETCH_ERROR", error);
  }
});
</script>
