import CharacterService from '@/services/CharacterService';
import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu : false,
    character : {},
    attributes : [],
    capacities : []
  },
  getters: {
    isLoggedIn(){
      return !!localStorage.getItem('token');
    }
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
    },
    STORE_CHARACTER_CAPACITIES(state, characterData){
      state.capacities = characterData
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
    },
    async getCharacterCapacities({commit}, characterId) {
      await CharacterService.getCharacterCapacities(characterId).then(response => {
        console.log(response.data);
        commit('STORE_CHARACTER_CAPACITIES', response.data)
      })
    }
  },
  modules: {
  }
})
