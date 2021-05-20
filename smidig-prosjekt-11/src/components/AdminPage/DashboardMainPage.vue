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
    <l-marker :icon="defaultIcon" :lat-lng="markerLatLng">
      <l-popup>I'm a refugee camp!</l-popup>
    </l-marker>
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
      geojson: customGeojson,
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      }
    };
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
