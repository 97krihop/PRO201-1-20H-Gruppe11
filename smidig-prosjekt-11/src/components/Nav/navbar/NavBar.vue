<template>
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
</template>
<script>
export default {
    name: "NavBar"
}
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
  border: 1px solid salmon;  
}
</style>