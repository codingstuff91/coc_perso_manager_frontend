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
  login({email, password}) {
    return apiClient.post('/api/auth/login', { email, password })
  }
}