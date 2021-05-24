<template>
  <div>
    <h3>Product Data Page</h3>
    <TopMetrics name-of-data="Lamp" data-to-display="1000" />
    <TopMetrics name-of-data="Battery" data-to-display="1000" />
    <TopMetrics name-of-data="Light bulb" data-to-display="1000" />
    <TopMetrics name-of-data="Socket Charger" data-to-display="1000" />
    <TopMetrics name-of-data="12V charger" data-to-display="1000" />
    <TopMetrics name-of-data="Power Button" data-to-display="1000" />
    <TopMetrics name-of-data="Screen" data-to-display="1000" />
    <TopMetrics name-of-data="Solar panel" data-to-display="1000" />

    <br />
    <h3>History</h3>
  </div>
</template>

<script>
import TopMetrics from "@/components/AdminPage/TopMetrics";
export default {
  name: "ProductDataPage",
  setup() {},
  components: { TopMetrics },
  methods: {},
  data() {
    return {
      productImages: [
        {
          partNumber: "1",
          partName: "Lamp",
          imgName: "ic-part-lamp"
        },
        {
          partNumber: "2",
          partName: "12V charger",
          imgName: "ic-part-adapter-charger"
        },
        {
          partNumber: "3",
          partName: "Battery",
          imgName: "ic-part-battery"
        },
        {
          partNumber: "4",
          partName: "Power button",
          imgName: "ic-part-button"
        },
        {
          partNumber: "5",
          partName: "Light bulb",
          imgName: "ic-part-lightbulb"
        },
        {
          partNumber: "6",
          partName: "Screen",
          imgName: "ic-part-screen"
        },
        {
          partNumber: "7",
          partName: "Socket charger",
          imgName: "ic-part-socket-charger"
        },
        {
          partNumber: "8",
          partName: "Solar panel",
          imgName: "ic-part-solar-panel"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
