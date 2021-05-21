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

  <!-- ### Using Leaflet with Vue 3 ### -->
  <!-- https://github.com/vue-leaflet/vue-leaflet -->
  <section class="map-container">
    <l-map style="height: 65vh; width: 99%" :zoom="zoom" :center="center">
      <l-geo-json :geojson="geojson" :options="options"> </l-geo-json>

      <l-marker :lat-lng="coordinates1">
        <l-popup class="camp-popup-container">I'm a refugee camp!</l-popup>
      </l-marker>
      <l-marker :lat-lng="coordinates2">
        <l-popup>I'm a refugee camp!</l-popup>
      </l-marker>
      <l-marker :lat-lng="coordinates3">
        <l-popup>I'm a refugee camp!</l-popup>
      </l-marker>

      <l-control :position="'topleft'">
        <country-bar-chart-component />
      </l-control>

      <l-control class="custom-control-watermark" :position="'bottomleft'">
        <p>"watermark" stats</p>
      </l-control>

      <l-control :position="'bottomright'">
        <p>Stats on the bottom right side</p>
      </l-control>

      <l-control class="custom-control-button" :position="'topright'">
        <p @click="showAlert">
          Clickable stats
        </p>
      </l-control>
    </l-map>
  </section>
</template>

<script>
import TopMetric from "@/components/AdminPage/TopMetrics";
import customGeojson from "@/assets/data/custom.geo.json";
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LGeoJson,
  LMarker,
  LPopup,
  LControl
} from "@vue-leaflet/vue-leaflet";
import CountryBarChartComponent from "./Components/CountryBarChartComponent";

export default {
  name: "DashboardPage",
  setup() {},
  components: {
    CountryBarChartComponent,
    TopMetric,
    LMap,
    LGeoJson,
    LMarker,
    LPopup,
    LControl
  },
  methods: {
    showAlert() {
      alert("Klikka på stats");
    }
  },
  data() {
    return {
      zoom: 2,
      center: [22, 50],
      geojson: customGeojson,
      options: {
        style: function() {
          return {
            weight: 1,
            color: "#123123",
            opacity: 1,
            fillColor: "#b5bbb8",
            fillOpacity: 1
          };
        }
      },
      coordinates1: [31, 0],
      coordinates2: [37, 30],
      coordinates3: [31, 36]
    };
  },
  computed: {},
  async beforeMount() {}
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 80vw;
  margin: auto;
}
.top-metrics-container {
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.custom-control-watermark {
  font-size: 200%;
  font-weight: bolder;
  color: #415a77;
  text-shadow: ;
}

.custom-control-button {
  background: #fff;
  padding: 0 0.5em;
  border: 1px solid #aaa;
  border-radius: 0.1em;
  cursor: pointer;
}
</style>
