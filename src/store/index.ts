import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {},
  state: {
    response: {
      copyright: "",
      date: "",
      explanation: "",
      hdurl: "",
      mediaType: "",
      serviceVersion: "",
      title: "",
      url: "",
    },
  },
  getters:{
    getHdurl: state => {
      return state.response.hdurl
    },
    getTitle: state => {
      return state.response.title
    },
    getExplanation: state => {
      return state.response.explanation
    }
  },
  mutations: {
    updateState(state, payload) {
      (state.response.copyright = payload.copyright),
        (state.response.date = payload.date),
        (state.response.explanation = payload.explanation),
        (state.response.hdurl = payload.hdurl),
        (state.response.mediaType = payload.media_type),
        (state.response.serviceVersion = payload.service_version),
        (state.response.title = payload.title),
        (state.response.url = payload.url);
    },
  },
  actions: {
    async getInfoFromApi({ commit }) {
      const url =
        "https://api.nasa.gov/planetary/apod?api_key=3aKYDmIV2WsPB1CQ7EDPGWF9M1uJPbyCTCcF7izp";
      await axios
        .get(url)
        .then(response => commit("updateState", response.data))
        .catch(response => console.error(response));
    },
  },
});
