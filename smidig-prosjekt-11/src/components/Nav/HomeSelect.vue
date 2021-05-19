<template>
    <!-- Component creates two buttons. Is used in home screen for selecting Repair/Elearning if user is logged in -->
    <div id="button-div" class="rounded-lg shadow-lg ring-2 ring-black ring-opacity-50">
        <router-link
            v-if="isAdmin === true"
            tag="button"
            to="/admin"
            type="button"
            class="font-standardText button shadow-lg home-learn-ico-src home-ico-style duration-75 transform hover:scale-105 motion-reduce:transform-none"
        >
            <h4>Admin</h4>
        </router-link>
        <router-link
            tag="button"
            to="/repair"
            type="button"
            class="font-standardText button shadow-lg home-repair-ico-src home-ico-style duration-75 transform hover:scale-105 motion-reduce:transform-none"
        >
            <h4>Register Repair</h4>
        </router-link>

        <router-link
            tag="button"
            to="/#"
            type="button"
            class="font-standardText button shadow-lg home-learn-ico-src home-ico-style duration-75 transform hover:scale-105 motion-reduce:transform-none"
        >
            <h4>E-learning</h4>
        </router-link>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: 'Home',
    setup() {
        const store = useStore();
        const router = useRouter();
        return {
            store,
            router
        };
    },
    methods: {
        retrieveIsAdmin() {
            const result = useStore().getters.getIsAdmin;
            if (result === false) {
                this.router.push({ name: 'Home' });
            } else {
                return true;
            }
        }
    },
    data() {
        return {
            isAdmin: this.retrieveIsAdmin()
        };
    }
};
</script>

<style lang="scss" scoped>
#button-div {
    padding: 0px 1vw;
    height: auto;
    width: 20vw;
    background-color: #405c6a;
    padding-bottom: 1%;
}
.button {
    background-color: #9fd18d;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    border: 2px solid #433149;
    border-radius: 10px;
    color: #423048;
    cursor: pointer;
    width: 100%;
    height: 30%;
    margin: auto;
    margin-top: 7%;
    outline: none;

    &:hover {
        background-color: white;
    }

    h4 {
        margin-top: 2%;
    }
}
.isAdminClass {
    height: 30vh;
}
.home-repair-ico-src {
    background-image: url('../../assets/Images/Icons/landing_repair.png');
}
.home-learn-ico-src {
    background-image: url('../../assets/Images/Icons/landing_elearn.png');
}
.home-ico-style {
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10%;
}
</style>
