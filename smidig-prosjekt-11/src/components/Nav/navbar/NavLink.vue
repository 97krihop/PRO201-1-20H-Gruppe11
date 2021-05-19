<template>
    <div class="nav-menu-item">
        <div class="icon-container">
            <icon-base :iconName="icon" iconColor="#7eb46b" iconWidth="100%" iconHeight="100%" />
        </div>
        <div>
            {{ textValue }}
        </div>
    </div>
</template>
<script>
import IconBase from '../../UI/IconBase.vue';
export default {
    name: 'NavLink',
    components: { IconBase },
    props: {
        textValue: {
            type: String
        },
        linkDestination: {
            type: String
        },
        icon: {
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
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 100px;
    // border: 1px solid orange;
    color: #7eb46b;
    font-size: 1.1rem;
    border: 1px solid red;
    // font-weight: 600;
}

.icon-container {
    height: 24px;
    width: 24px;
    // border: 1px solid blue;
    margin-right: 5px;
}

@media screen and (max-width: 960px) {
    .nav-menu-item {
        margin-left: 0;
        margin-top: 50px;
    }
}
</style>
