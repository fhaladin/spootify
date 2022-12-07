<template>
  <div class="main">
    <TheSidebar />

    <div className="main__content">
      <TheHeader />
      <div className="main__content__child">
        <RouterView />
      </div>
    </div>

    <ThePlayer />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import ThePlayer from "@/components/ThePlayer.vue";
</script>
