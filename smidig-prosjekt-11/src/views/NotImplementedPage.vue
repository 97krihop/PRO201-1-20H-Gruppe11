<template>
    <div>
        <base-site>
        <div class="header-container">
      <h1>This page is outside the submission scope, and is therefore not implemented</h1>
      </div>
    </base-site>
    </div>
</template>
<script>
import BaseSite from "../components/Nav/BaseSite.vue";

export default {
    name: "NotImplementedPage",
    components: { BaseSite }
}
</script>
<style lang="scss" scoped>
    .header-container {
        border: 1px solid red;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    h1 {
        font-size: 2rem;
        margin-bottom: 15%;
        width: 80%;
        text-align: center;
        // border: 1px solid blue;
        
    }
</style>