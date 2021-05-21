<template>
  <div class="main-information-topleft-container">
    <p><br />7.541.390 Units</p>
    <div class="country-list-flex-container">
      <div class="pie-chart-countries">
        <vue3-chart-js
          :id="doughnutChart.id"
          :type="doughnutChart.type"
          :data="doughnutChart.data"
          @before-render="beforeRenderLogic"
        ></vue3-chart-js>
        <div
          v-for="entry in countryColors"
          :key="entry.countryName"
          class="country-list-item"
          :style="{ color: entry.color }"
        >
          {{ entry.countryName + " " + entry.amount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
export default {
  name: "CountryBarChartComponent",
  setup() {
    const doughnutChart = {
      type: "doughnut",
      data: {
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10]
          }
        ]
      }
    };

    return {
      doughnutChart
    };
  },
  components: { Vue3ChartJs },
  methods: {},
  data() {
    return {
      countryColors: [
        { countryName: "Jemen", color: "#41B883", amount: 40 },
        { countryName: "Venezuela", color: "#E46651", amount: 20 },
        { countryName: "Afghanistan", color: "#00D8FF", amount: 80 },
        { countryName: "Colombia", color: "#DD1B16", amount: 10 }
      ]
    };
  },
  computed: {}
};
</script>

<style scoped>
.country-list-item {
  margin-top: 20px;
  text-align: start;
}
.pie-chart-countries {
  margin: auto;
  height: 100px;
  width: 100px;
}
.main-information-topleft-container {
  height: 40vh;
  width: 20vh;
  font-size: 1.5em;
  padding-top: 5px;
  font-family: "Open Sans", sans-serif;
  color: black;
  line-height: 100%;
  margin-top: 10px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  box-shadow: 3px 3px 12px #e8e8e8;
}
.country-list-flex-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
}
</style>
