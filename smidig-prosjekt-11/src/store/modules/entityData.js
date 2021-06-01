const state = {
  entityArray: [],
  status: null
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
  },
  startPost(state) {
    state.status = null;
  },
  successPost(state) {
    state.status = true;
    state.entityArray = [];
  },
  errorPost(state) {
    state.status = false;
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
  },
  getPostStatus: state => {
    return state.status;
  }
};

const actions = {
  postRepairs: async function({ commit, state }) {
    commit("startPost");
    try {
      await fetch("http://localhost:3000/api/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          username: "bright",
          password: "admin1234"
        }),
        headers: {
          ...this.headers,
          "Content-Type": "application/json"
        }
      });
      const temp = [...state.entityArray];
      const data = temp.map(e => {
        return {
          serialNumber:
            e.entitySerialNr.length > 0 ? e.entitySerialNr : "noSerial",
          parts: e.parts.map(x => {
            return { ...x, isChecked: undefined };
          }),
          productName: "Sunbell"
        };
      });
      const res = await fetch("http://localhost:3000/api/report", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          ...this.headers,
          "Content-Type": "application/json"
        }
      });
      commit(res.status === 200 ? "successPost" : "errorPost");
    } catch (e) {
      commit("errorPost");
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
