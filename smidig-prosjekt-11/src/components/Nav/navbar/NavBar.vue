<template>
    <div class="nav-bar">
        <hamburger-button @click="toggleMenu()" :is-selected="menuIsOpen" />

        <div class="image-container">
            <router-link class="logo-link" to="/">
                <img id="logo-img" src="@/assets/Images/brightLogo.png" alt="Bright" />
            </router-link>
        </div>
        <ul class="nav-menu" v-bind:class="{ active: menuIsOpen }">
            <!-- <li v-for="(it, index) in menuItems" class="nav-menu-item" v-bind:key="index">{{ it.bValue }}</li> -->
            <nav-link v-for="(it, index) in menuItems" 
            :key="index"
            :textValue="it.bValue"
            :iconFileName="it.icon"
            />
        </ul>
        <h1 class="user-header">{{ user || 'Not logged in' }}</h1>
    </div>
</template>
<script>
import HamburgerButton from './HamburgerButton.vue';
import NavLink from './NavLink.vue';
export default {
    components: { HamburgerButton, NavLink },
    name: 'NavBar',
    data() {
        return {
            menuItems: [
                {
                    bValue: 'Profile',
                    icon: 'ic_profile.png',
                    link: '/repair',
                    alt: 'User icon'
                },
                {
                    bValue: 'Certifications',
                    icon: 'certificate-icon.png',
                    link: '/entry-successful',
                    alt: 'Certifications icon'
                },
                {
                    bValue: 'Log in',
                    icon: 'login-icon.png',
                    link: '/login',
                    alt: 'Login icon'
                }
            ],
            menuIsOpen: false
        };
    },
    methods: {
        toggleMenu() {
            const temp = this.menuIsOpen;
            this.menuIsOpen = !temp;
        }
    }
};
</script>
<style lang="scss" scoped>
.nav-bar {
    width: 100%;
    height: 80px;
    background: #405c6a;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    align-items: center;
}

.hamburger-button {
    display: none;
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
    top: 5px;
    font-size: 1rem;
    color: #7eb46b;
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-left: 60px;
    width: 300px;
    z-index: 999;
}

@media screen and (max-width: 960px) {
    .nav-menu {
        position: absolute;
        height: calc(100% - 80px);
        margin-left: 0;
        top: 80px;
        left: -100%;
        background: #25353d;
        transition: all 0.5s ease;

        flex-direction: column;
        justify-content: flex-start;
    }

    .hamburger-button {
        display: flex;
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-menu-item {
        margin-top: 20px;
    }
}
</style>
