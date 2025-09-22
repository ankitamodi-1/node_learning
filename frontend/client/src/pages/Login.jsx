import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../utils/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const schema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required'),
})

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { setToken } = useAuth()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    const res = await api.post('/api/auth/login', data)    
    const { token } = res.data.data.token
    setToken(token)    
    localStorage.setItem("token", res.data.data.token);

    navigate('/employees')
  }

  const successMsg = location.state?.message

  return (
    <div className="container">
      <h2>Login</h2>
      {successMsg && <div className="success">{successMsg}</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Email
          <input type="email" {...register('email')} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>
        <label>
          Password
          <input type="password" {...register('password')} />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </label>
        <button type="submit" disabled={isSubmitting}>Login</button>
      </form>
    </div>
  )
}


