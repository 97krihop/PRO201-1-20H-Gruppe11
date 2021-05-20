<template>
    <div v-if="isAdmin === true">
        <base-site>
            <side-bar-menu />
            <top-metric :name-of-data="totalRep" data-to-display="333123" metric-icon-src="" />
            <top-metric :name-of-data="totalUnitsRegistered" data-to-display="1.000.000" />
            <top-metric :name-of-data="mostRepairedPartToday" data-to-display="PCB" />
        </base-site>
        <div class="grid-container" v-if="isAdmin === true"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/Nav/BaseSite.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import TopMetric from '@/components/AdminPage/TopMetrics';
import SideBarMenu from '@/components/AdminPage/SideBarMenu';

// TODO Add icons from svg icon pack when pushed to dev
export default {
    name: 'adminPage',
    setup() {
        const store = useStore();
        const router = useRouter();
        return {
            store,
            router
        };
    },
    components: {
        TopMetric,
        SideBarMenu,
        BaseSite
    },
    methods: {
        retrieveIsAdmin() {
            const result = useStore().getters.getIsAdmin;
            if (result === false) {
                this.router.push({ name: 'Home' });
            } else {
                return true;
            }
        }
    },
    data() {
        return {
            isAdmin: this.retrieveIsAdmin(),
            totalRep: 'Total Repairs',
            totalUnitsRegistered: 'Total Units Registered',
            mostRepairedPartToday: 'Most Repaired Part Today'
        };
    }
};
</script>

<style scoped></style>
