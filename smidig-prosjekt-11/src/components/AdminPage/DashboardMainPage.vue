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
  <l-map style="height: 350px" :zoom="zoom" :center="center">
    <l-geo-json
      :geojson="geojson"
      :options="options">
    </l-geo-json>
    
    <l-marker :lat-lng="coordinates1">
      <l-popup>I'm a refugee camp!</l-popup>
    </l-marker>    
    <l-marker :lat-lng="coordinates2">
      <l-popup>I'm a refugee camp!</l-popup>
    </l-marker>    
    <l-marker :lat-lng="coordinates3">
      <l-popup>I'm a refugee camp!</l-popup>
    </l-marker>
    
  </l-map>
</template>

<script>
import TopMetric from "@/components/AdminPage/TopMetrics";
import customGeojson from "@/assets/data/custom.geo.json";
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  name: "DashboardPage",
  setup() {},
  components: {
    TopMetric,
    LMap,
    LGeoJson,
    LMarker,
    LPopup
  },
  methods: {},
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
      coordinates3: [31, 36],
    };
  },
  computed: {},
  async beforeMount() {}
};
</script>

<style scoped>
.top-metrics-container {
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
