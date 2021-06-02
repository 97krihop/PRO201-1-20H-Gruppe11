<template>
  <div class="top-metrics-container">
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Total Repaired Units'"
        :data-to-display="data.length.toString()"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Total Units Registered'"
        data-to-display="30.920"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Most Repaired Part Today'"
        data-to-display="Lamp"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Most Repaired Part Monthly'"
        data-to-display="Battery"
      />
    </div>
  </div>

  <div id="mapid" class="map-container">
    <div class="metric-chart-container">
      <!--<repair-part-bar-chart-component style="z-index: 1000" />-->
      <country-bar-chart-component
        :cardTitle="'Repaired Units Total'"
        :amount="data.length.toString()"
        :repairData="data"
        style="z-index: 1000"
      />
      <!--<repair-part-bar-chart-component style="z-index: 1000" />-->
      <repair-part-bar-chart-component
        :cardTitle="'Most Repaired Monthly'"
        :repairData="data"
        style="z-index: 1000"
      />
    </div>
  </div>
  <description-text
    description-text="Map of camps and metric details"
  ></description-text>
</template>

<script>
import TopMetric from "@/components/admin_page/TopMetrics";
import "@/assets/css/map.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import CountryBarChartComponent from "./single_components/CountryBarChartComponent";
import RepairPartBarChartComponent
  from "@/components/admin_page/dashboard/single_components/RepairedPartBarChartComponent";
import { createMap } from "@/assets/js/map.js";
import DescriptionText from "../DescriptionText";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getCurrentInstance, onMounted, ref } from "vue";

export default {
  name: "DashboardPage",
  setup() {
    const router = useRouter();
    const store = useStore();
    const retrievedData = [];
    const { ctx: _this } = getCurrentInstance();
    const campData = ref([]);
    const products = [
      {
        partNumber: "1",
        partName: "Lamp",
        imgName: "ic-part-lamp",
        totalRepairs: "0"
      }
    ];

    onMounted(async () => {
      await store.dispatch("fetchAllRepairs");
      await store.dispatch("fetchCampData");
      campData.value = await store.getters.getCampData;

      createMap(
        23,
        20,
        2,
        true,
        campData.value,
        products,
        null,
        null,
        null,
        childMapClick
      );

      function childMapClick(param) {
        _this.$emit("childToParent", param);
      }
    });

    return {
      router,
      store,
      retrievedData
    };
  },
  data() {
    return {
      data: this.store.getters.getAllRepairs
    };
  },
  components: {
    DescriptionText,
    RepairPartBarChartComponent,
    CountryBarChartComponent,
    TopMetric
  },
  methods: {
    showAlert() {
      alert("Klikka på stats");
    }
  }
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 80vw;
  height: 70%;
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

.metric-chart-container {
  z-index: 20;
  width: 20vw;
  display: grid;
  padding-left: 20px;
}

.top-metrics-container-inner {
  width: 1fr;
  height: 200px;
  padding: 30px;
  text-align: center;
}
</style>
