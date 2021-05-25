<template>
  <div id="search-container">
    <input
      type="text"
      placeholder="Search..."
      v-model="searchQuery"
      @focus="showSearchSuggestions = true"
    />

    <div class="search-suggestions" v-if="showSearchSuggestions">
      <div
        v-for="product in searchedProducts"
        :key="product.id"
        v-on:click="showResult(product)"
        style="margin: 0"
      >
        <div>
          <div>{{ product.id }}</div>
          <div>
            {{ product.campRepairs[0] }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="mapid" class="map-container"></div>

  <h3>
    Camp Data
  </h3>
  <div v-if="showSearchResults" class="part-grid">
    <div
      v-for="product in products"
      :key="product.partNumber"
      class="part-cards"
    >
      <TopMetrics
        :name-of-data="product.partName"
        :data-to-display="product.totalRepairs"
        :metric-icon-src="product.imgName"
        display-image="{{true}}"
      />
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { createMap } from "@/assets/js/map.js";
import TopMetrics from "@/components/AdminPage/TopMetrics";
import { computed, ref } from "vue";
export default {
  name: "CampDataPage",

  setup() {
    const products = [
      {
        partNumber: "1",
        partName: "Lamp",
        imgName: "ic-part-lamp",
        totalRepairs: "0"
      },
      {
        partNumber: "2",
        partName: "12V charger",
        imgName: "ic-part-adapter-charger",
        totalRepairs: "0"
      },
      {
        partNumber: "3",
        partName: "Battery",
        imgName: "ic-part-battery",
        totalRepairs: "0"
      },
      {
        partNumber: "4",
        partName: "Power button",
        imgName: "ic-part-button",
        totalRepairs: "0"
      },
      {
        partNumber: "5",
        partName: "Light bulb",
        imgName: "ic-part-lightbulb",
        totalRepairs: "0"
      },
      {
        partNumber: "6",
        partName: "Screen",
        imgName: "ic-part-screen",
        totalRepairs: "0"
      },
      {
        partNumber: "7",
        partName: "Socket charger",
        imgName: "ic-part-socket-charger",
        totalRepairs: "0"
      },
      {
        partNumber: "8",
        partName: "Solar panel",
        imgName: "ic-part-solar-panel",
        totalRepairs: "0"
      }
    ];
    const campData = [
      {
        id: "Camp 1",
        campRepairs: [12, 40, 53, 213, 20, 32, 5, 21, 12, 32, 54, 23]
      },
      {
        id: "Camp 2",
        campRepairs: [21, 4, 35, 23, 2, 42, 35, 41, 32, 14, 65, 82]
      }
    ];
    const searchQuery = ref("");
    const searchedProducts = computed(() => {
      return campData.filter(product => {
        return (
          product.id.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !==
          -1
        );
      });
    });
    return { searchedProducts, searchQuery, products };
  },
  components: {
    TopMetrics
  },
  methods: {
    showResult(product) {
      //console.log("test");
      for (let i = 0; i < this.products.length; i++) {
        console.log(product.campRepairs[i]);
        this.products[i].totalRepairs = product.campRepairs[i];
      }
      this.showSearchSuggestions = false;
      this.showSearchResults = true;
    }
  },
  mounted() {
    this.$nextTick(function() {
      createMap(23, 20, 5, false);
    });
  },
  data() {
    return {
      showSearchSuggestions: false,
      showSearchResults: false
    };
  }
};
</script>

<style lang="scss" scoped>
#search-container {
  display: flex;
  flex-wrap: wrap; /* Optional. only if you want the items to wrap */
  justify-content: center; /* For horizontal alignment */
  padding: 20px 0;
  width: 600px;
  margin: auto;

  input {
    width: 500px;
    height: 40px;
    padding: 10px;
    background: #fff;
    outline: none;
    -webkit-box-shadow: 3px 3px 3px 2px rgba(90, 89, 89, 0.31);
    box-shadow: 3px 3px 15px 2px rgba(90, 89, 89, 0.31);
    border-radius: 10px 10px 0 0;
  }

  .search-suggestions {
    flex: none;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    width: 500px;
    height: 100px;
    overflow-y: scroll;
    padding: 10px;
    background: #fff;
    -webkit-box-shadow: 3px 3px 3px 2px rgba(90, 89, 89, 0.31);
    box-shadow: 3px 3px 15px 2px rgba(90, 89, 89, 0.31);
    border-radius: 0 0 10px 10px;
    z-index: 1000;
  }
}

.map-container {
  position: absolute;
  top: 20%;
  right: 1.5%;
  width: 80vw;
  height: 250px;
  margin: auto;
  background-color: #fff;
  border: 1px solid lightgrey;
}

.part-grid {
  display: flex;
  width: 55%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin: auto auto 1vh;
  position: absolute;
  top: 50%;
  left: 27%;
}

.part-cards {
  width: 210px;
  height: 175px;
  transform: scale(0.75);
  -webkit-box-shadow: 5px 5px 21px 4px rgba(90, 89, 89, 0.31);
  box-shadow: 5px 5px 21px 4px rgba(90, 89, 89, 0.31);
  border-radius: 15px;
  padding: 15px;
}
</style>
