<template>
    <div v-if="isAdmin === true">
        <base-site>
            <side-bar-menu v-on:childToParent="recievedClickInChildSideMenu" />
            <camp-data-page />
        </base-site>
        <DashboardPage />
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/Nav/BaseSite.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import SideBarMenu from '@/components/AdminPage/SideBarMenu';
import DashboardPage from '../components/AdminPage/DashboardPage';

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
        SideBarMenu,
        DashboardPage,
        // CampDataPage,
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
            selectedSection: '',
            isAdmin: this.retrieveIsAdmin(),
            totalRep: 'Total Repairs',
            totalUnitsRegistered: 'Total Units Registered',
            mostRepairedPartToday: 'Most Repaired Part Today'
        };
    }
};
</script>

<style scoped></style>
