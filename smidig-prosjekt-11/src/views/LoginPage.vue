<template>
    <base-site isDark="true">
        <login />
    </base-site>
</template>

<script>
import BaseSite from '@/components/Nav/BaseSite.vue';
import Login from '@/components/Login/Login.vue';
export default {
    name: 'LoginPage',
    setup() {
        return {
            BaseSite,
            Login
        };
    }
};
</script>

<style scoped></style>
