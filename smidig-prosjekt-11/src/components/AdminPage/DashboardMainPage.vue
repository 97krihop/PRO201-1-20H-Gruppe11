<template>
  <div></div>
  <top-metric
    :name-of-data="totalRep"
    data-to-display="333123"
    metric-icon-src=""
  />
  <top-metric
    :name-of-data="totalUnitsRegistered"
    data-to-display="1.000.000"
  />
  <top-metric :name-of-data="mostRepairedPartToday" data-to-display="PCB" />
  
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

<style scoped></style>
