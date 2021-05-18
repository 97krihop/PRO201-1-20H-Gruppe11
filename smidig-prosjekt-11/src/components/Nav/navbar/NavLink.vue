<template>
    <div class="nav-menu-item">
        <img src="../../../assets/Images/Icons/ic_user.svg" :alt="altText" />
        {{ textValue }}
    </div>
</template>
<script>
export default {
    name: 'NavLink',
    props: {
        textValue: {
            type: String
        },
        linkDestination: {
            type: String
        },
        iconFileName: {
            type: String
        },
        altText: {
            type: String
        }
    }
};
</script>
<style lang="scss" scoped>
.nav-menu-item {
    border: 1px solid salmon;
    color: #7eb46b;
    font-size: 1.2rem;
    font-weight: 600;
}

img {
    color: salmon;
}
</style>
