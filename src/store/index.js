import CharacterService from '@/services/CharacterService';
import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu : false,
    character : {}
  },
  getters: {
  },
  mutations: {
    DISPLAY_MOBILE_MENU(state){
      state.mobileMenu = true;
    },
    STORE_CHARACTER_INFOS(state, characterData){
      state.character = characterData
    }
  },
  actions: {
    displayMobileMenu({commit}){
      commit('DISPLAY_MOBILE_MENU');
    },
    getCharacterInformations({commit}, characterId){
      CharacterService.getCharacter(characterId).then( response => commit('STORE_CHARACTER_INFOS', response.data))
    }
  },
  modules: {
  }
})
