import CharacterService from '@/services/CharacterService';
import { createStore } from 'vuex'
import AuthService from '@/services/AuthService';

export default createStore({
  state: {
    mobileMenu : false,
    characters : [],
    character : {},
    attributes : [],
    capacities : [],
    user : {}
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
    STORE_CHARACTERS_LIST(state, charactersList){
      state.characters = charactersList
    },
    STORE_CHARACTER_INFOS(state, characterData){
      state.character = characterData
    },
    STORE_CHARACTER_ATTRIBUTES(state, characterData){
      state.attributes = characterData
    },
    STORE_CHARACTER_CAPACITIES(state, characterData){
      state.capacities = characterData
    },
    STORE_USER(state, userData){
      state.user = userData
    }
  },
  actions: {
    userLogin({commit}, user){
      AuthService.login({
          email : user.email, 
          password : user.password})
      .then(({data}) => {
          localStorage.setItem('token', data[1]);
          localStorage.setItem('userId', data[0].id);
          commit('STORE_USER', data[0])
      })
    },
    displayMobileMenu({commit}){
      commit('DISPLAY_MOBILE_MENU');
    },
    async getCharacters({commit}, userId){
      await CharacterService.getCharacters(userId).then(response => {
        commit('STORE_CHARACTERS_LIST', response.data)
      })
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
