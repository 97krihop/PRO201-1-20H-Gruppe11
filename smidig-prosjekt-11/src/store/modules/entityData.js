const state = {
    entityArray: []
};

const mutations = {
    addEntity(state, payload) {
        state.entityArray.push(payload);
        console.log('State updated:  ' + payload);
    },
    deleteEntity(state, payload) {
        var entityArray = state.entityArray;
        let indexPos = entityArray.findIndex(entity => entity.entitySerialNr === payload);

        state.entityArray.splice(indexPos, 1);
    }
};

const getters = {
    getEntities(state) {
        return state.entityArray;
    },
    getEntityBySerial: (state) => (srNr) => {
        return state.entityArray.find(entity => entity.entitySerialNr === srNr);
    },
    getProducts(state) {
        return state.products;
    }
};

export default {
    state,
    mutations,
    getters
};
