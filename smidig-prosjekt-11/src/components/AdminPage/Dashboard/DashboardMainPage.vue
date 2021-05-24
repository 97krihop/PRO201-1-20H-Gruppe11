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
    <div class="metric-chart-container">
      <repair-part-bar-chart-component />
      <country-bar-chart-component />
      <repair-part-bar-chart-component />
      <repair-part-bar-chart-component />
    </div>
  </div>
</template>

<script>
import TopMetric from "@/components/AdminPage/TopMetrics";
import customGeojson from "@/assets/data/custom.geo.json";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet/dist/leaflet.js";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import layersImage from "@/assets/Images/layers.png";
import CountryBarChartComponent from "./Components/CountryBarChartComponent";
import RepairPartBarChartComponent from "@/components/AdminPage/Dashboard/Components/RepairedPartBarChartComponent";

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
      const L = window.L; // uppress 'L' is not defined error

      // Fix wrongly referenced image locations in Leaflet bundle
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png")
      });

      var map = L.map("mapid", {
        center: [23, 20],
        zoom: 2,
        maxZoom: 20
      });

      const geojsonStyle = {
        color: "#123123",
        weight: 1,
        opacity: 1,
        fillColor: "#b5bbb8",
        fillOpacity: 1
      };

      L.geoJSON(customGeojson, {
        style: geojsonStyle
      }).addTo(map);

      console.log(__dirname + "/layers.png");

      var campLabelIcon1 = L.divIcon({
        className: "camp-label",
        html:
          '<img src="' +
          layersImage +
          '" />' +
          '<p class="camp-title">Camp 1</p>' +
          '<div class="headline">723</div>'
      });

      var campLabelIcon2 = L.divIcon({
        className: "camp-label",
        html:
          '<img src="' +
          layersImage +
          '" />' +
          '<p class="camp-title">Camp 2</p>' +
          '<div class="headline">1,374</div>'
      });
      var campLabelIcon3 = L.divIcon({
        className: "camp-label",
        html:
          '<img src="' +
          layersImage +
          '" />' +
          '<p class="camp-title">Camp 3</p>' +
          '<div class="headline">15</div>'
      });

      var m1 = new L.marker([20, 20], { icon: campLabelIcon1 });
      var m2 = new L.marker([15, 20], { icon: campLabelIcon2 });
      var m3 = new L.marker([25, 15], { icon: campLabelIcon3 });

      var markers = L.markerClusterGroup();
      markers.addLayer(m1);
      markers.addLayer(m2);
      markers.addLayer(m3);
      map.addLayer(markers);
    });
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

<style>
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";
}

.camp-title {
  color: grey;
}

.headline {
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

.camp-label img {
  float: left;
  padding-top: 2px;
}
</style>
