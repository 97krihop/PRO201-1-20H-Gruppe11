<template>
  <div class="metric-container">
    <div class="description-container">
      <img class="metric-icon" :src="metricIconSrc" />
      <p class="section-item-text">{{ nameOfData }}</p>
    </div>
    <div>
      <p class="data-to-display">{{ dataToDisplay }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopMetrics",
  props: {
    nameOfData: String,
    dataToDisplay: String,
    metricIconSrc: String
  },
  setup() {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.metric-container {
  text-align: center;
  height: 200px;
  width: 250px;
  padding: 30px;
  border-radius: 15px 50px;
}
.description-container {
  height: 1vh;
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.section-item-text {
  text-align: center;
  font-size: 1.3em;
  font-family: "Open Sans", sans-serif;
  color: #828b96;
}
.data-to-display {
  color: #4aae9b;
  font-size: 2em;
  margin-top: 90px;
}
</style>
