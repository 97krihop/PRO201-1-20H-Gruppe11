<template>
    <div class="nav-bar">
        <div class="menu-btn"></div>

        <div class="image-container">
            <router-link class="logo-link" to="/">
                <img id="logo-img" src="@/assets/Images/brightLogo.png" alt="Bright" />
            </router-link>
        </div>
        <ul class="nav-menu">
            <li v-for="(it, index) in menuItems" class="nav-menu-item" v-bind:key="index">{{ it.bValue }}</li>
        </ul>
        <h1 class="user-header">{{ user || 'Not logged in' }}</h1>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            menuItems: [
                {
                    bValue: 'User',
                    icon: 'user-person-icon.png',
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
            ]
        };
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

.menu-btn {
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
    // border: 1px solid greenyellow;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-left: 60px;
    width: 300px;
}

.nav-menu-item {
    // border: 1px solid red;
    color: #7eb46b;
    font-size: 1.2rem;
    font-weight: 600;
}

@media screen and (max-width: 960px) {
    .nav-menu {
        
        position: absolute;
        height: calc(100% - 80px);
        margin-left: 0;
        top: 80px;
        left: 0%;
        background: #25353d;
        
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .nav-menu-item {
        margin-top: 20px;
    }

    .menu-btn {
        height: 35px;
        width: 35px;
        background: red;
        margin-right: 10px;
        display: block;
    }
}
</style>
