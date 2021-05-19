<template>
    <div class="nav-menu-item">
        <div class="icon-container">
            <icon-base :iconName="icon" iconColor="#7eb46b" iconWidth="100%" iconHeight="100%" />
        </div>
        <div class="item-title">
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
    align-items: center;
    margin-left: 60px;
    // border: 1px solid orange;
}

.icon-container {
    height: 24px;
    width: 24px;
    margin-right: 5px;
}

.item-title {
    color: #7eb46b;
    font-size: 1rem;
}

@media screen and (max-width: 960px) {
    .nav-menu-item {
        border: 2px solid #7eb46b;
        border-radius: 10px;
        padding: 10px;
        margin-left: 0;
        margin-bottom: 20px;
    }

    .item-title {
        margin-left: 8px;
        color: #7eb46b;
        font-size: 0.9rem;
        // flex: 1;
        text-align: center;
    }

    .nav-menu-item:hover {
        background: #405c6a;
    }
}
</style>
