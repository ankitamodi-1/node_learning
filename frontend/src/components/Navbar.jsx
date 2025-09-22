import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">Employees</Link>
      </div>
      <div className="nav-right">
        <NavLink to="/employees" className="nav-link">Employees</NavLink>
        {!isAuthenticated && (
          <>
            <NavLink to="/signup" className="nav-link">Signup</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </>
        )}
        {isAuthenticated && (
          <>
            <NavLink to="/employees/new" className="nav-link">Add Employee</NavLink>
            <button className="btn" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  )
}


