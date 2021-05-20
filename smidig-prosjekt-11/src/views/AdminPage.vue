<template>
    <div v-if="isAdmin === true">
        <base-site>
            <side-bar-menu v-on:childToParent="recievedClickInChildSideMenu" />
            <template>
                <camp-data-page></camp-data-page>
            </template>
            ></base-site
        >
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/Nav/BaseSite.vue';
import CampDataPage from '@/components/AdminPage/CampDataPage';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
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
            selectedSection: '',
            isAdmin: this.retrieveIsAdmin()
        };
    }
};
</script>

<style scoped></style>
