<template>
    <div class="home">
        <base-site>
            <div class="home-select-container">
                <home-select @click="showModal = true" class="home-select" />
            </div>
            <img src="@/assets/Images/Background/Background.jpg" id="background-image" alt="background" />
        </base-site>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/Nav/BaseSite.vue';
import HomeSelect from '@/components/Nav/HomeSelect.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {};
    },
    name: 'Home',
    setup() {
        const store = useStore();
        const router = useRouter();

        if (store.getters.getUserId == null) router.push({ name: 'LoginPage' });

        return {
            BaseSite,
            HomeSelect
        };
    }
};
</script>

<style lang="scss" scoped>
// Adding div around element to center home-select-component
.home-select-container {
    border: 1px solid green;
    width: 100%;
    height: 100%;
    z-index: 2;
    margin: auto;
}

.home-select {
    margin: auto;
    position: relative;
    top: 37%;
    z-index: 2;
    }

#background-image {
    z-index: 0;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 80px);
    background-image: url('../assets/Images/Background/Background.jpg');
    filter: grayscale(100%);
    overflow: hidden;
}
</style>
