import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../utils/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  salary: yup.number().typeError('Salary must be a number').required('Salary is required'),
  is_manager: yup.boolean().required(),
  dob: yup.date().typeError('DOB is required').required('DOB is required'),
  status: yup.mixed().oneOf(['active', 'inactive']).required(),
})

export default function EmployeeForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEdit = id !== 'new' && !!id

  const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', salary: '', is_manager: false, dob: null, status: 'active' },
  })

  useEffect(() => {
    if (isEdit) {
      (async () => {
        const res = await api.get(`/api/employees/${id}`)
        const emp = res.data.data.employee
        reset({
          name: emp.name || '',
          salary: emp.salary ?? '',
          is_manager: !!emp.is_manager,
          dob: emp.dob ? new Date(emp.dob) : null,
          status: emp.status || 'active',
        })
      })()
    }
  }, [id, isEdit, reset])

  const onSubmit = async (formData) => {
    const payload = { ...formData, dob: formData.dob ? formData.dob.toISOString() : null }
    if (isEdit) {
      await api.put(`/api/employees/${id}`, payload)
    } else {
      await api.post('/api/employees', payload)
    }
    navigate('/employees')
  }

  return (
    <div className="container">
      <h2>{isEdit ? 'Edit' : 'Add'} Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Name
          <input type="text" {...register('name')} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </label>
        <label>
          Salary
          <input type="number" step="0.01" {...register('salary')} />
          {errors.salary && <span className="error">{errors.salary.message}</span>}
        </label>
        <fieldset className="fieldset">
          <legend>Is Manager</legend>
          <label className="inline">
            <input type="radio" value="true" {...register('is_manager', { setValueAs: (v) => v === 'true' })} /> Yes
          </label>
          <label className="inline">
            <input type="radio" value="false" {...register('is_manager', { setValueAs: (v) => v === 'true' })} /> No
          </label>
          {errors.is_manager && <span className="error">{errors.is_manager.message}</span>}
        </fieldset>
        <label>
          DOB
          <Controller
            control={control}
            name="dob"
            render={({ field }) => (
              <DatePicker selected={field.value} onChange={field.onChange} placeholderText="Select date" />
            )}
          />
          {errors.dob && <span className="error">{errors.dob.message}</span>}
        </label>
        <label>
          Status
          <select {...register('status')}>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>
          {errors.status && <span className="error">{errors.status.message}</span>}
        </label>
        <button type="submit" disabled={isSubmitting}>{isEdit ? 'Update' : 'Create'}</button>
      </form>
    </div>
  )
}


