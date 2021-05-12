<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <div class="nav-bar">
                <!-- <hamburger-icon @click="toggleSidebar" /> -->

                <div class="image-container">
                    <router-link class="logo-link" to="/">
                        <img id="logo-img" src="@/assets/Images/brightLogo.png" alt="Bright" />
                    </router-link>
                    <div class="nav-bar-menu"></div>
                </div>
                <h1 class="user-header">{{ user || 'Not logged in' }}</h1>

            </div>
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
export default {
    components: {
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

.nav-bar {
    width: 100%;
    height: 80px;
    background: #405c6a;
    padding-left: 20px;
    padding-right: 20px;
    
    display: flex;
    align-items: center;
}

.image-container {
    height: 60%;
    width: auto;
    display: flex;
    align-self: center;
    align-items: center;    
    
    img {
        height: 100%;
        
    }
    
    .logo-link {
        height: 100%;
    }
}

.user-header {
    position: absolute;
    right: 20px;
    font-size: 1rem;
    color: #7eb46b;
}

.nav-bar-menu {
//   border: 1px solid salmon;  
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
