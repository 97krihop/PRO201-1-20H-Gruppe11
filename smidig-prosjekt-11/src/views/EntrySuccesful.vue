<template>
    <div class="entrySuccesful">
        <base-site />
    </div>
    <approved-report />
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import ApprovedReport from '@/components/Feedback/ApprovedReport.vue';

export default {
    name: 'Home',
    components: {
        BaseSite,
        ApprovedReport
    }
};
</script>

<style scoped></style>
