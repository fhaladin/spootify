<template>
  <div class="player">
    <div class="player__album">
      <span />
      <p>Nothing's playing</p>
    </div>

    <div class="player__controls">
      <FontAwesomeIcon icon="fa-solid fa-step-backward" />
      <FontAwesomeIcon icon="fa-solid fa-play-circle" />
      <FontAwesomeIcon icon="fa-solid fa-step-forward" />
    </div>

    <div class="player__seekbar" />

    <div class="player__actions">
      <FontAwesomeIcon icon="fa-solid fa-ellipsis-h" />
      <FontAwesomeIcon icon="fa-solid fa-heart" />
      <FontAwesomeIcon icon="fa-solid fa-random" />
      <FontAwesomeIcon icon="fa-solid fa-retweet" />
      <FontAwesomeIcon icon="fa-solid fa-volume-down" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/player.scss";
</style>
