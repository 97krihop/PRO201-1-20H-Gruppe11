<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <nav-bar/>
        </header>

        <!-- <hamburger :class="{ showburger: sideBarVisible, hideburger: !sideBarVisible }" ref="hamburger" /> -->

        <slot />
        
        <footer>
            <div id="footer-div" class="absolute">
                <small class="font-standardText white-text">
                    Copyright &copy; 2020 - Smidig-Prosjekt Gruppe 11
                </small>
            </div>
        </footer>
    </div>
</template>

<script>
// import Hamburger from '@/components/UI/Menu/Hamburger.vue';
// import HamburgerIcon from '@/components/UI/Menu/HamburgerIcon.vue';
// import LoginButton from '@/components/Login/LoginButton.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import NavBar from './navbar/NavBar.vue';
export default {
    components: {
        NavBar
        // Hamburger
    },
    name: 'LogoBar',
    setup() {
        const store = useStore();
        const router = useRouter();
        const user = computed(() => {
            return store.getters.getUserId;
        });
        function goHome() {
            router.push({ name: 'home' });
        }
        return {
            // HamburgerIcon,
            // LoginButton,
            user,
            goHome
        };
    },
    data() {
        return {
            sideBarVisible: false
        };
    },
    methods: {
        toggleSidebar() {
            const sideBarBool = this.sideBarVisible;
            this.sideBarVisible = !sideBarBool;
            this.$refs.hamburger.updateloginValues();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button {
    cursor: pointer;
}







.white-text {
    color: white;
}

#footer-div {
    left: 1vw;
    bottom: 1vh;
}

// Removes blue outline of hamburgerbar
button:focus {
    outline: 0;
}

.showburger {
    transition: all 0.3s;
    opacity: 1;
    left: 0vw;
    visibility: visible;
}

.hideburger {
    transition: all 0.3s;
    opacity: 0;
    left: -8vw;
    visibility: hidden;
}
</style>
