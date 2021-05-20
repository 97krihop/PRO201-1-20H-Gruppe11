<template>
    <div v-if="isAdmin === true">
        <base-site>
<<<<<<< HEAD
            <side-bar-menu v-on:childToParent="recievedClickInChildSideMenu" />
            <template>
                <camp-data-page></camp-data-page>
            </template>
            ></base-site
        >
=======
            <side-bar-menu />
        </base-site>
    <div class="grid-container" v-if="isAdmin === true">
        <base-site />
        <div>NAVBAR</div>

        <top-metric :name-of-data="totalRep" data-to-display="333123" metric-icon-src=""/>
        <top-metric :name-of-data="totalUnitsRegistered" data-to-display="1.000.000" />
        <top-metric :name-of-data="mostRepairedPartToday" data-to-display="PCB" />

        <div>PITCHER</div>
>>>>>>> 2e8ac61de08a640229854838f145d223657ba701
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/Nav/BaseSite.vue';
import CampDataPage from '@/components/AdminPage/CampDataPage';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import TopMetric from '@/components/AdminPage/TopMetrics';
import SideBarMenu from '@/components/AdminPage/SideBarMenu';

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
        CampDataPage,
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
        },
        recievedClickInChildSideMenu(event) {
            this.selectedSection = event;
        }
    },
    data() {
        return {
<<<<<<< HEAD
            selectedSection: '',
            isAdmin: this.retrieveIsAdmin()
=======
            isAdmin: this.retrieveIsAdmin(),
            totalRep: 'Total Repairs',
            totalUnitsRegistered: 'Total Units Registered',
            mostRepairedPartToday: 'Most Repaired Part Today'
>>>>>>> 2e8ac61de08a640229854838f145d223657ba701
        };
    }
};
</script>

<style scoped></style>
