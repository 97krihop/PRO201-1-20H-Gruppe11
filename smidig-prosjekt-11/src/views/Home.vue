<template>
  <div class="about">
    <base-site></base-site>
    <home-select class="home-select-container center-screen"></home-select>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue'
import HomeSelect from '@/components/Nav/HomeSelect.vue'

export default {
  name: 'Home',
  components: {
    BaseSite,
    HomeSelect
  }
}
</script>

<style scoped>
.home-select-container {
  position: absolute;
  left: 41vw;
  top: 40vh;
}

.center-screen {
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
