import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import api from '../utils/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '')

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      api.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
      localStorage.removeItem('token')
      delete api.defaults.headers.common.Authorization
    }
  }, [token])

  const logout = () => setToken('')

  const value = useMemo(() => ({ token, setToken, logout, isAuthenticated: !!token }), [token])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


