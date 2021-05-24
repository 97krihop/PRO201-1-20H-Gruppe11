<template>
  <div class="top-metrics-container">
    <top-metric
      :name-of-data="'Total Repaired Units'"
      data-to-display="333.123"
      metric-icon-src=""
    />
    <top-metric
      :name-of-data="'Total Units Registered'"
      data-to-display="1.000.000"
    />
    <top-metric
      :name-of-data="'Most Repaired Part Today'"
      data-to-display="PCB"
    />

    <top-metric
      :name-of-data="'Most Repaired Part Monthly'"
      data-to-display="Battery"
    />
  </div>

  <div id="mapid" class="map-container">
    <repair-part-bar-chart-component />
    <country-bar-chart-component />
  </div>
</template>

<script>
import TopMetric from "@/components/AdminPage/TopMetrics";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import CountryBarChartComponent from "./Components/CountryBarChartComponent";
import RepairPartBarChartComponent from "@/components/AdminPage/Dashboard/Components/RepairedPartBarChartComponent";
import {createMap} from "@/assets/js/map.js";

export default {
  name: "DashboardPage",
  setup() {},
  components: {
    RepairPartBarChartComponent,
    CountryBarChartComponent,
    TopMetric
  },
  methods: {
    showAlert() {
      alert("Klikka på stats");
    }
  },
  mounted() {
    this.$nextTick(function() {
      createMap(23, 20, 2);
    });
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 80vw;
  margin: auto;
  background-color: #fff;
  border: 1px solid lightgrey;
}

.top-metrics-container {
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.camp-label {
  background-color: black;
  color: white;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100px !important;
  height: auto !important;
  margin: 0 auto;
}
</style>
