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
  <l-map style="height: 350px" :zoom="zoom" :center="center">
    <l-geo-json :geojson="geojson" :options-style="styleFunction"></l-geo-json>
  </l-map>

</template>

<script>
import TopMetric from "@/components/AdminPage/TopMetrics";
import customGeojson from "./data/custom.geo.json";
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";

export default {
  name: "DashboardPage",
  setup() {},
  components: {
    TopMetric,
    LMap,
    LGeoJson
  },
  methods: {},
  data() {
    return {
      zoom: 2,
      center: [22, 15],
      geojson: customGeojson,
      fillColor: "#000",
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      }
    };
  },
  computed: {
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 1,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    }
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  }
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
