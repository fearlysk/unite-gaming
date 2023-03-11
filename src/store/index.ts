import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    isAuth: false
  },
  getters: {
  },
  mutations: {
    logOut(state) {
      state.isAuth = false;
    }
  },
  actions: {
    logOut({commit}) {
      commit('logOut');
    }
  },
  modules: {
  }
})

// add vuex-persistedstate
