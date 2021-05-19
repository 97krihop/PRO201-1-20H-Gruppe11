<template>
    <div v-if="isAdmin === true">
        <base-site>
            <side-bar-menu />
        </base-site>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/Nav/BaseSite.vue';
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
            isAdmin: this.retrieveIsAdmin()
        };
    }
};
</script>

<style scoped></style>
