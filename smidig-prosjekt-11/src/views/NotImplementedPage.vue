<template>
  <div>
    <base-site>
      <div class="header-container">
        <h1>
          This page is outside the submission scope, and is therefore not
          implemented
        </h1>
        <home-select-button
          iconName="home"
          buttonTitle="Home"
          routerLinkDest=""
          iconColor="#ececec"
        />
      </div>
    </base-site>
  </div>
</template>
<script>
import BaseSite from '../components/Nav/BaseSite.vue';
import HomeSelectButton from '../components/Nav/HomeSelectButton.vue';

export default {
  name: 'NotImplementedPage',
  components: { BaseSite, HomeSelectButton },
};
</script>
<style lang="scss" scoped>
.header-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    font-size: 2rem;
      margin-bottom: 40px;
    width: 80%;
    text-align: center;
    color: #2c2a29;
  }
  
  .home-select-button {
      background: #2c2a29;
      color: #ececec;
      width: auto;
      
  }
  
  
}
</style>
