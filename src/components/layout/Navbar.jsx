import { Link } from 'react-router-dom'

export function Navbar({ title }) {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container-fluid px-4">
        <span className="navbar-brand mb-0 h6 text-secondary">{title}</span>
        <div className="ms-auto">
          <Link to="/login" className="btn btn-outline-secondary btn-sm">
            Salir
          </Link>
        </div>
      </div>
    </header>
  )
}
