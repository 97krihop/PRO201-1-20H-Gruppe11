<template>
    <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        viewBox="0 0 18 18"
        :aria-labelledby="iconName"
        role="presentation"
    >
        <title :id="iconName" lang="en">{{ iconName }} icon</title>
        <g :fill="iconColor">
            <slot />
        </g>
    </svg> -->

    <svg class="icon-svg">
        <!-- <use :xlink:href="`../../assets/Images/Icons/sprite.svg#icon-${iconName}`"></use> -->
        <use 
        :xlink:href="require('../../assets/Images/Icons/sprite.svg')+ '#icon-' + iconName"
        :fill="iconColor"
        :width="iconWidth"
        :height="iconHeight"
        ></use>
    </svg>

    <!-- <svg class="icon-svg">
        <use :xlink:href="'../../assets/Images/Icons/sprite.svg#icon-' + iconName"></use>
    </svg> -->
</template>
<script>
export default {
    name: 'IconBase',
    props: {
        iconName: {
            type: String,
            required: true
        },
        iconWidth: {
            type: [Number, String],
            default: 32
        },
        iconHeight: {
            type: [Number, String],
            default: 32
        },
        iconColor: {
            type: String,
            default: '#FFFFFF'
        }
    }
};
</script>
