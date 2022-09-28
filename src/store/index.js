import CharacterService from '@/services/CharacterService';
import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu : false,
    character : {},
    attributes : []
  },
  getters: {
  },
  mutations: {
    DISPLAY_MOBILE_MENU(state){
      state.mobileMenu = true;
    },
    STORE_CHARACTER_INFOS(state, characterData){
      state.character = characterData
    },
    STORE_CHARACTER_ATTRIBUTES(state, characterData){
      state.attributes = characterData
    }
  },
  actions: {
    displayMobileMenu({commit}){
      commit('DISPLAY_MOBILE_MENU');
    },
    async getCharacterInformations({commit}, characterId){
      await CharacterService.getCharacter(characterId).then( response => {
        commit('STORE_CHARACTER_INFOS', response.data)
      });
    },
    async characterAttributesValues({commit}, characterId){
      await CharacterService.getAttributesValues(characterId).then( response => {
        commit('STORE_CHARACTER_ATTRIBUTES', response.data)
      });
    }
  },
  modules: {
  }
})
