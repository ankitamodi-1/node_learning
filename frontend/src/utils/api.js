import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

// Attach Authorization header from localStorage if available
api.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem('token')
  if (storedToken && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${storedToken}`
  }
  return config
})

export default api


