<template>
  <div>
    <h3>Product Data Page</h3>
    <ul>
      <li>Nøkkeldata:</li>
      <li>Most changed parts</li>
      <li>Camp with the most changed parts</li>
      <li>Most repaired parts today</li>
      <li>Most repaired part monthly</li>
    </ul>
    <br />
    <h3>History</h3>
  </div>
  <div class="country-list-flex-container">
    <div class="pie-chart-countries">
      <vue3-chart-js
          :id="barChart.id"
          :type="barChart.type"
          :data="barChart.data"
      ></vue3-chart-js>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "ProductDataPage",
  setup() {
    const barChart = {
      id: "bar",
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: 'Lamp Item',
            data: [40, 20, 80, 10, 7, 20, 32, 44, 55, 23, 45, 23],
            backgroundColor: "#41B883",
            borderColor: "#41B883"
          }
        ]
      }
    };

    return {
      barChart: barChart
    };
  },
  components: { Vue3ChartJs },
  methods: {},
  /*data() {  // Hente data fra backend
    return {
      parts: [
        { partData: "Most changed parts", amount: 25},
        { partData: "Venezuela", color: "#E46651", amount: 20 },
        { partData: "Afghanistan", color: "#00D8FF", amount: 80 },
        { partData: "Colombia", color: "#DD1B16", amount: 10 },
        { partData: "Norge", color: "#41B883", amount: 7 }
      ]
    };
  },*/
  computed: {}
};
</script>

<style scoped>
.country-list-flex-container{
  width: 40vw;
  height: 40vh;
}

</style>
