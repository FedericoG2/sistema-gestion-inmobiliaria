import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar.jsx'
import { Sidebar } from './Sidebar.jsx'

export function AdminLayout() {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar variant="admin" />
      <div className="flex-grow-1 d-flex flex-column bg-light">
        <Navbar title="Panel de administración" />
        <main className="flex-grow-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
