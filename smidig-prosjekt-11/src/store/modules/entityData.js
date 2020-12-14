const state = {
    entityArray: [],
    products: [
        {
            partNumber: '1',
            partName: 'Solar Panel',
            imgName: 'solarPanelCompleteWithCable-removebg-preview',
            isChecked: false
        },
        {
            partNumber: '2',
            partName: 'Battery',
            imgName: 'battery-removebg-preview',
            isChecked: false
        },
        {
            partNumber: '3',
            partName: 'Seal',
            imgName: 'powerSwitchCoverNew-removebg-preview',
            isChecked: false
        },
        {
            partNumber: '4',
            partName: 'USB Connector',
            imgName: 'directUsbPort-removebg-preview',
            isChecked: false
        },
        {
            partNumber: '5',
            partName: 'Neck plus light',
            imgName: 'batteryPackLightUnitComplete-removebg-preview',
            isChecked: false
        },
        {
            partNumber: '6',
            partName: 'Torx-5',
            imgName: 'batteryBoxTorx5-removebg-preview',
            isChecked: false
        },
        {
            partNumber: '7',
            partName: 'Torx-6',
            imgName: 'batteryBoxTorx6-removebg-preview',
            isChecked: false
        }
    ]
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
    getProducts(state) {
        return state.products;
    }
};

export default {
    state,
    mutations,
    getters
};
