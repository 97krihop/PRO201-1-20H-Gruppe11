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
  <l-map style="height: 350px; width: 99%" :zoom="zoom" :center="center">
    <l-geo-json :geojson="geojson" :options="options"> </l-geo-json>

    <l-marker :lat-lng="coordinates1">
      <l-icon :icon-anchor="staticAnchor" className="camp-label">
        <p class="camp-title">Camp 3</p>
        <div class="headline">{{ customText }}</div>
        <img src="./layers.png" />
      </l-icon>
    </l-marker>
    <l-marker :lat-lng="coordinates2">
      <l-icon :icon-anchor="staticAnchor" className="camp-label">
        <p class="camp-title">Boot camp</p>
        <div class="headline">{{ customText }}</div>
        <img src="./layers.png" />
      </l-icon>
    </l-marker>

    <!-- https://vue2-leaflet.netlify.app/examples/custom-icons.html -->
    <l-marker :lat-lng="coordinates3">
      <l-icon :icon-anchor="staticAnchor" className="camp-label">
        <p class="camp-title">Camp kulinaris</p>
        <div class="headline">{{ customText }}</div>
        <img src="./layers.png" />
      </l-icon>
    </l-marker>

    <l-control :position="'topleft'">
      <p>General statistics</p>
      <p>All users</p>
      <p>7,541,390</p>
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
</template>

<script>
import TopMetric from "@/components/AdminPage/TopMetrics";
import customGeojson from "@/assets/data/custom.geo.json";
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LGeoJson,
  LMarker,
  LControl,
  LIcon
} from "@vue-leaflet/vue-leaflet";
import { icon } from "leaflet";

export default {
  name: "DashboardPage",
  setup() {},
  components: {
    TopMetric,
    LMap,
    LGeoJson,
    LMarker,
    LControl,
    LIcon
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
      coordinates3: [61, 36],
      icon: icon({
        //iconUrl: "@/assets/images/primary-random.png",
        //iconSize: [32, 37],
        //iconAnchor: [16, 37]
      }),
      staticAnchor: [16, 37],
      customText: "3,745",
      iconSize: 64
    };
  },
  computed: {},
  async beforeMount() {}
};
</script>

<style>
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
  color: #aaa;
  text-shadow: #555;
}

.custom-control-button {
  background: #fff;
  padding: 0 0.5em;
  border: 1px solid #aaa;
  border-radius: 0.1em;
  cursor: pointer;
}

.camp-title {
  color: grey;
}

.camp-label {
  background-color: black;
  color: white;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
</style>
