import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import api from '../utils/api'

export default function EmployeesList() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState({ page: 1, limit: 3, total: 0, items: [] })
  const [loading, setLoading] = useState(false)
  const page = Number(searchParams.get('page') || 1)
  const limit = 3
  const search = searchParams.get('search') || ''
  const token = localStorage.getItem("token");


  const totalPages = useMemo(() => Math.max(1, Math.ceil(data.total / data.limit || limit)), [data.total, data.limit])

  useEffect(() => {
    const controller = new AbortController()
    const fetchEmployees = async () => {
      setLoading(true)
      try {       
        const res = await api.get("/api/employees", {
          params: { page, limit, search },
          signal: controller.signal,
          headers: {
            Authorization: `Bearer ${token}`, // use state value
          },
        });
        console.log(res.data.data)
        setData(res.data.data)
      } finally {
        setLoading(false)
      }
    }
    fetchEmployees()
    return () => controller.abort()
  }, [page, limit, search])

  const onDelete = async (id) => {
    if (!confirm('Delete this employee?')) return
    await api.delete(`/api/employees/${id}`)
    // refetch current page
    const res = await api.get('/api/employees', { params: { page, limit, search } })
    setData(res.data.data)
  }

  const goPage = (newPage) => setSearchParams({ page: String(newPage), search })

  const onSearch = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const q = String(form.get('q') || '')
    setSearchParams({ page: '1', search: q })
  }

  return (
    <div className="container">
      <div className="list-header">
        <h2>Employees</h2>
        <form onSubmit={onSearch} className="search">
          <input name="q" defaultValue={search} placeholder="Search by name" />
          <button type="submit">Search</button>
        </form>
        <button onClick={() => navigate('/employees/new')}>Add Employee</button>
      </div>
      {loading ? <p>Loading...</p> : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Salary</th>
                <th>Manager</th>
                <th>DOB</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.employees?.length > 0 ? (
                data.employees.map((emp) => (
                  <tr key={emp.id || emp._id}>
                    <td>{emp.name}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.is_manager ? "Yes" : "No"}</td>
                    <td>{emp.dob ? new Date(emp.dob).toLocaleDateString() : ""}</td>
                    <td>{emp.status}</td>
                    <td>
                      <Link to={`/employees/${emp.id || emp._id}/edit`}>Edit</Link>
                      <button onClick={() => onDelete(emp.id || emp._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>No results</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      <div className="pagination">
        <button disabled={page <= 1} onClick={() => goPage(page - 1)}>Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => goPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}


