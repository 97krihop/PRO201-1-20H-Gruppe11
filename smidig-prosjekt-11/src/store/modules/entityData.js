import { post } from "axios";

const state = {
  entityArray: []
};

const mutations = {
  addEntity(state, entity) {
    state.entityArray.push(entity);
  },
  deleteEntity(state, payload) {
    //Deletes entity based on entity position in entityArray
    const entityArray = state.entityArray;
    let indexPos = entityArray.findIndex(entity => entity.id === payload);
    state.entityArray.splice(indexPos, 1);
  },
  deleteAllEntity(state) {
    //Deletes total entity position in entityArray
    state.entityArray = [];
  },
  editEntity(state, entity) {
    let success = false;
    for (const item of state.entityArray) {
      if (item.id === entity.id) {
        item.entitySerialNr = entity.entitySerialNr;
        item.parts = entity.parts;
        success = true;
        break;
      }
    }
    if (!success)
      console.log(
        "unable to locate existing records with matching id, changes will not be saved"
      );
  }
};

const getters = {
  getEntities(state) {
    return state.entityArray;
  },
  getNumOfEntities(state) {
    return state.entityArray.length;
  },
  getEntityById: state => id => {
    return state.entityArray.find(entity => entity.id === id);
  }
};

const actions = {
  postRepairs: async function({ state }) {
    try {
      await post(
        "http://localhost:3000/api/login",
        {
          username: "bright",
          password: "admin1234"
        },
        { withCredentials: true }
      );
      const temp = [...state.entityArray];
      const res = await post(
        "http://localhost:3000/api/report",
        temp.map(e => {
          return {
            serialNumber:
              e.entitySerialNr.length > 0 ? e.entitySerialNr : "noSerial",
            parts: e.parts.map(x => {
              return { ...x, isChecked: undefined, imgName: undefined };
            }),
            productName: "Sunbell"
          };
        }),
        {
          withCredentials: true
        }
      );
      return res.status === 200;
    } catch (e) {
      return false;
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
