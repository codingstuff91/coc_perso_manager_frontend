import axios from 'axios'
const authToken = localStorage.getItem('token');

const apiClient = axios.create({  
  baseURL: `http://localhost:8000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization : "Bearer " + authToken
  }
});

export default {
  getCharacters() {
    return apiClient.get('/api/characters');
  },
  getCharacter({characterId}) {
    return apiClient.get('/api/characters/' + characterId);
  },
  getCharacterCapacities({characterId}) {
    return apiClient.get('/api/character/' + characterId + '/capacities');
  }
}