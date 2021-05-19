<template>
    <div v-if="isAdmin === true">
        <base-site />
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

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
