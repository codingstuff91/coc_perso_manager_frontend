import axios from 'axios'
    
const apiClient = axios.create({  
  baseURL: `http://localhost:8000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAll() {
    return apiClient.get('/api/admin/particularities')
  },
  getParticularity({particularityId}){
    return apiClient.get("api/admin/particularities/" + particularityId + "/edit")
  },
  updateParticularity(particularity){
    return apiClient.put("api/admin/particularities/" + particularity.id, {
      name : particularity.name,
      description : particularity.description
    })
  },

}