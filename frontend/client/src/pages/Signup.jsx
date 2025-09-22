import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  name: yup.string().required('Name is required').matches(/^[A-Za-z\s]+$/, 'Only letters and spaces allowed'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{10,}$/, 'Min 10 chars, 1 uppercase, 1 number, 1 special char'),
})

export default function Signup() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    await api.post('/api/auth/signup', data)
    navigate('/login', { state: { message: 'Signup successful, please login.' } })
  }

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Name
          <input type="text" {...register('name')} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </label>
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
        <button type="submit" disabled={isSubmitting}>Sign Up</button>
      </form>
    </div>
  )
}


