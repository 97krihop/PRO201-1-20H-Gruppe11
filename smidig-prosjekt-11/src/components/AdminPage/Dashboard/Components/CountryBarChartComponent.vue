<template>
  <div class="main-information-topleft-container">
    <p><br />7.541.390 Units</p>
    <div class="country-list-flex-container"></div>
  </div>
</template>

<script>
export default {
  name: "CountryBarChartComponent",
  setup() {},
  components: {},
  methods: {},
  data() {
    return {};
  },
  computed: {}
};
</script>

<style scoped>
.main-information-topleft-container {
  background-color: #a9a9a9;
  height: 40vh;
  width: 20vh;
  text-align: center;
  font-size: 1.5em;
  padding-top: 5px;
  font-family: "Open Sans", sans-serif;
  color: black;
  line-height: 100%;
  margin-top: 10px;
  background: #fafafa;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  box-shadow: 3px 3px 12px #e8e8e8;
}
.country-list-flex-container {
  display: grid;
  height: 100%;
  background-color: #405c6a;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
}
</style>
