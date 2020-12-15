const state = {
    idIncrementor: 0,
    entityArray: []
};

const mutations = {
    addEntity(state, entity) {
        entity.id = this.idIncrementor
        state.entityArray.push(entity);
        this.idIncrementor++;
        console.log('State updated:  ' + entity);
    },
    deleteEntity(state, payload) {
        var entityArray = state.entityArray;
        let indexPos = entityArray.findIndex(entity => entity.entitySerialNr === payload);

        state.entityArray.splice(indexPos, 1);
    },
    editEntity: (state) => (newEntity, oldSN) => {
        let oldIndex = state.entityArray.findIndex(entity => entity.entitySerialNr === oldSN);
        state.entityArray[oldIndex] = newEntity;
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
