import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import EmployeesList from './pages/EmployeesList'
import EmployeeForm from './pages/EmployeeForm'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/employees" element={<EmployeesList />} />
            <Route path="/employees/new" element={<EmployeeForm />} />
            <Route path="/employees/:id/edit" element={<EmployeeForm />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}
