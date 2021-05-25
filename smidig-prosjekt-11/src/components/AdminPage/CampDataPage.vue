<template>
  <div id="search-container">
    <input type="text" placeholder="Search..." v-model="searchQuery"
    @focus="showSearchSuggestions = true"/>

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
            {{ product.location }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-bind:style="[showSearchResults ? {'height': '250px'} : {'height': '70%'}]" id="mapid" class="map-container"></div>

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
import { computed, ref} from "vue";
export default {
  name: "CampDataPage",

  setup() {
    const products =[
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
        id: "Hagadera Refugee Camp",
        location: "Kenya",
        geoloc: [40.5230712890625, 0.17028783523693297],
        campRepairs: [12, 40, 53, 0, 210, 32, 5, 21, 12, 0, 54, 23]
      },
      {
        id: "Kakuma Refugee Camp",
        location: "Kenya",
        geoloc: [34.80743408203125, 3.760115447396889],
        campRepairs: [21, 5, 3, 243, 2, 42, 35, 41, 32, 14, 65, 15]
      },
      {
        id: "",
        location: "Tanzania",
        geoloc: [31.02813720703125, -6.287998672327658],
        campRepairs: [13, 0, 35, 2223, 2, 442, 345, 41, 32, 14, 0, 12]
      },
      {
        id: "",
        location: "Ethiopia",
        geoloc: [34.00543212890625, 7.681051391626661],
        campRepairs: [40, 344, 35, 23, 2, 242, 34, 41, 32, 14, 65, 0]
      },
      {
        id: "",
        location: "South Sudan",
        geoloc: [30.047607421875, 10.244654445228324],
        campRepairs: [6, 14, 325, 11, 22, 42, 12, 4, 32, 14, 3, 82]
      }
    ];
    
    const searchQuery = ref("");
    const searchedProducts = computed(() => {
      return campData.filter((product) => {
        return (product.id
                .toLowerCase()
                .indexOf(searchQuery.value.toLowerCase()) !== -1
        );
      });
    });
    
    return {searchedProducts, searchQuery, products, campData};
  },
  components: {
    TopMetrics
  },
  methods: {
    showResult(product){
      //console.log("test");
      for(let i = 0; i < this.products.length; i++){
        //console.log(product.campRepairs[i]);
        this.products[i].totalRepairs = product.campRepairs[i];
      }
      this.showSearchSuggestions = false;
      this.showSearchResults = true;
    }
  },
  mounted() {
    createMap(23, 20, 2, true, this.campData, this.products);
    //this.$nextTick(function() {
    //});
  },
  data() {
    return {
      showSearchSuggestions: false,
      showSearchResults: false,
    };
  }
};
</script>

<style scoped>
#search-container {
  display: flex;
  flex-wrap: wrap; /* Optional. only if you want the items to wrap */
  justify-content: center; /* For horizontal alignment */
  //align-items: center; /* For vertical alignment */
  padding: 5px;
}

#search-container input {
  width: 350px;
  border: 1px solid lightgrey;
}

.search-suggestions {
  flex: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid lightgrey;
  z-index: 1000;
}

.map-container {
  position: relative;
  width: 60vw;
  height: 70%;
  margin: auto;
  background-color: #fff;
  border: 1px solid lightgrey;
}

.part-grid {
  display: flex;
  width: 60%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin: auto auto 1vh;}

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
