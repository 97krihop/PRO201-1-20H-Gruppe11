const state = {
    userId: null
};

const mutations = {
    logout(state) {
        state.userId = null;
    },
    login(state, userId) {
        state.userId = userId;
    }
};
const getters = {
    userId(state) {
        return state.userId;
    }
};

export default {
    state,
    mutations,
    getters
};
