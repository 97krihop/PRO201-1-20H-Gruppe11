<template>
  <div class="main-information-topleft-container">
    <div class="header-text">
      <p>{{ cardTitle }}</p>
      <p class="header-text-number">{{ data.length }}</p>
    </div>
    <div class="country-list-flex-container">
      <div class="pie-chart-countries">
        <vue3-chart-js
          :id="doughnutChart.id"
          :type="doughnutChart.type"
          :data="doughnutChart.data"
        ></vue3-chart-js>
      </div>

      <div
        v-for="entry in campList"
        :key="entry.camp"
        class="country-list-item"
      >
        <p class="inline-elements">{{ entry.camp }}</p>
        <div
          class="country-color-box"
          :style="{ backgroundColor: entry.color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useStore } from "vuex";
export default {
  name: "CountryBarChartComponent",
  props: {
    cardTitle: String,
    amount: String,
    repairData: Array
  },
  data() {
    return {
      data: [],
      campList: [],
      colorArray: ["#41B883", "#E46651", "#00D8FF", "#DD1B16", "#41B883"]
    };
  },
  setup() {
    const store = useStore();

    const doughnutChart = {
      type: "doughnut",
      data: {
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#DD1B16",
              "#DF1C19"
            ],
            data: [40, 20, 80, 10, 7]
          }
        ]
      }
    };

    return {
      doughnutChart,
      store
    };
  },
  methods: {
    updateRepairData: function() {
      this.data = this.store.getters.getAllRepairs;
      const campList = [];
      let colorIndex = 0;
      let colorArray = this.colorArray;

      for (let entity of this.data) {
        if (!campList.find(el => el.camp === entity.campName)) {
          campList.push({
            camp: entity.campName,
            color: colorArray[colorIndex],
            amount: 1
          });
          colorIndex++;
        } else {
          console.log(colorIndex);
          const campNameIndex = campList.findIndex(
            el => el.camp === entity.campName
          );
          campList[campNameIndex] = {
            camp: campList[campNameIndex].camp,
            color: campList[campNameIndex].color,
            amount: campList[campNameIndex].amount + 1
          };
        }
      }
      console.log(campList);

      this.campList = campList;
    }
  },
  components: { Vue3ChartJs },
  mounted() {
    this.updateRepairData();
  },

  computed: {}
};
</script>

<style scoped>
.country-color-box {
  height: 5px;
  width: 20px;
  border-radius: 5px;
  display: inline-block;
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.header-text {
  text-align: center;
  display: inline;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
}

.header-text-number {
  color: #4aae9b;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5em;
  padding-top: 10px;
}
.section-item-text {
  color: #828b96;
}
.country-list-item {
  padding-top: 20px;
  text-align: center;
}
.pie-chart-countries {
  margin: auto;
  height: 100px;
  width: 100px;
}
.main-information-topleft-container {
  overflow-y: scroll;
  background-color: #ffffff;
  height: 30vh;
  width: 20vh;
  text-align: center;
  font-size: 1em;
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
  grid-template-rows: 30% repeat(20, 20px);
  grid-column-gap: 10px;
  grid-row-gap: 5px;
}
</style>
