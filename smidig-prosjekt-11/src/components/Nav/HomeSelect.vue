<template>
    <!-- Component creates two buttons. Is used in home screen for selecting Repair/Elearning if user is logged in -->
    <div id="button-div">
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
            class="font-standardText button home-repair-ico-src home-ico-style"
        >
            <h4>Register Repair</h4>
        </router-link>

        <router-link
            tag="button"
            to="/#"
            type="button"
            class="font-standardText button home-learn-ico-src home-ico-style"
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
    padding: 0 1vw;
    height: auto;
    width: 30vw;
    border-radius: 5px;
    background-color: #405c6a;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
        0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),
        0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
}
.button {
    background-color: #9fd18d;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    border-radius: 5px;
    color: #423048;
    cursor: pointer;
    width: 90%;
    height: 6vh;
    margin: 5% 10% auto 5%;
    outline: none;
    box-shadow: 2px 3px #899599;

    &:hover {
        background-color: #c0f6ae;
    }

    &:active {
        transform: scale(0.99);
        transition-duration: 10ms;
        box-shadow: 0 0 #000;
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
