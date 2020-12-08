<template>
  <div id="button-div">
    <div>
      <button
        type="button"
        class="rounded-lg button shadow-lg ring-4 ring-gray-300 ring-opacity-50 hover:bg-logoBar active:bg-yellow-200"
      >
        Repair
      </button>
      <img class="text-icons" style="top: 10px;" src="@/assets/Images/Icons/repairIcon.png" />
    </div>
    <div>
      <button
        type="button"
        style="margin-top: 10%;"
        class="rounded-lg button shadow-lg ring-4 ring-gray-300 ring-opacity-50 hover:bg-logoBar active:bg-yellow-200"
      >
        E-Learning
      </button>
      <img class="text-icons" style="bottom: 30px;" src="@/assets/Images/Icons/eLearningIcon.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
};
</script>

<style scoped>
#button-div {
  height: 240px;
  width: 500px;
}

.text-icons {
  position: absolute;
  left: 400px;
  height: 60px;
}

.button {
  background-color: #72b506;
  border: none;
  display: inline block;
  padding: 20px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.9em;
  cursor: pointer;
  width: 100%;
  outline: none;
</style>
