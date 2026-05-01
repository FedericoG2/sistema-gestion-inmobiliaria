import { Home } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const adminLinks = [
  { to: '/admin/dashboard', label: 'Dashboard' },
  { to: '/admin/propiedades', label: 'Propiedades' },
  { to: '/admin/inquilinos', label: 'Inquilinos' },
  { to: '/admin/contabilidad', label: 'Contabilidad' },
  { to: '/admin/reclamos', label: 'Reclamos' },
  { to: '/admin/documentacion', label: 'Documentación' },
]

const userLinks = [
  { to: '/usuario/mi-contrato', label: 'Mi contrato' },
  { to: '/usuario/perfil', label: 'Perfil' },
]

export function Sidebar({ variant }) {
  const links = variant === 'user' ? userLinks : adminLinks
  const heading = variant === 'user' ? 'Área inquilino' : 'Administración'

  return (
    <aside className="bg-dark text-white d-flex flex-column" style={{ width: 260, minHeight: '100vh' }}>
      <div className="p-4 border-bottom border-secondary">
        <div className="d-flex align-items-center gap-2 fw-semibold">
          <Home className="text-white flex-shrink-0" size={20} strokeWidth={2} aria-hidden />
          <span>{heading}</span>
        </div>
        <div className="small text-white-50 mt-1">Gestión inmobiliaria</div>
      </div>
      <nav className="nav flex-column p-3 gap-1">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-link rounded px-3 py-2 ${isActive ? 'bg-primary text-white' : 'text-white-50'}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
