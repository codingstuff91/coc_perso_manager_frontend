import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu : false
  },
  getters: {
  },
  mutations: {
    DISPLAY_MOBILE_MENU(state){
      state.mobileMenu = true;
    }
  },
  actions: {
    displayMobileMenu({commit}){
      commit('DISPLAY_MOBILE_MENU');
    }
  },
  modules: {
  }
})
