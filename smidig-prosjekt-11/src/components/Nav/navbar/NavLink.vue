<template>
    <div class="nav-menu-item">
        <div class="icon-container">
            <icon-base :iconName="icon" iconColor="#7eb46b"  />

            <!-- <svg class="icon-svg" width="200" height="40">
                <use xlink:href="../../../assets/Images/Icons/sprite.svg#icon-profile"></use>
            </svg> -->
        </div>

        <!-- {{ textValue }} -->
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
    border: 1px solid salmon;
    color: #7eb46b;
    font-size: 1.2rem;
    font-weight: 600;
}

img {
    color: orange;
}

.icon-svg {
    border: 1px solid red;
}

.icon-container {
    height: 50px;
    width: 50px;
}
</style>
