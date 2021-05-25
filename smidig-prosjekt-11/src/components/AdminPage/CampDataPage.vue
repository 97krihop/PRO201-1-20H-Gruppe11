<template>
  <div>
    <div id="mapid" class="map-container"></div>
    <div class="ui cards" style="margin: 10px">
      <div class="ui icon input" style="width: 100%">
        <input type="text" placeholder="Search..." v-model="searchQuery"
        @focus="showSearchResults = true"/>
        <i class="search icon"></i>
      </div>
      <div v-if="showSearchResults">
        <div
            class="card ui fluid"
            v-for="product in searchedProducts"
            :key="product.id"
            v-on:click="showResult(product)"
            style="margin: 0"
        >
          <div class="content">
            <div class="header">{{ product.id }}</div>
            <div class="meta">
              {{ product.campRepairs[0] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3>
      Camp Data
    </h3>
    <div class="part-grid">
      <div
        v-for="product in productList"
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
    const campData = [
      {
        id: "Camp 1",
        campRepairs: [12, 40, 53, 213, 20, 32, 5, 21, 12, 32, 54, 23]
      },{
        id: "Camp 2",
        campRepairs: [21, 4, 35, 23, 2, 42, 35, 41, 32, 14, 65, 82]
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
    return {searchedProducts, searchQuery};
  },
  components: {
    TopMetrics
  },
  methods: {
    showResult(product){
      //console.log("test");
      for(let i = 0; i < this.products.length; i++){
        console.log(product.campRepairs[i]);
        this.productList[i].totalRepairs = product.campRepairs[i];
      }
      this.showSearchResults = false;
    }
  },
  mounted() {
    this.$nextTick(function() {
      createMap(23, 20, 5);
    });
  },
  data() {
    return {
      showSearchResults: false,
      productList: [
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
      ]
    };
  }
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 350px;
  height: 250px;
  margin: auto;
  background-color: #fff;
  border: 1px solid lightgrey;
}
.searchbar{
  position: relative;
  margin: auto;
}

.product-image{
  width: 5vw;
  height: 5vh;
}

.ui{
  background: grey;
  width: 25vw;
}
.input{
  background: green;
  width: 200px;
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
