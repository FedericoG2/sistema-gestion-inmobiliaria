import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Building2, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import heroUrl from '../../assets/hero-login.jpg'
import './Login.css'

export function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/admin')
  }

  return (
    <div className="login-view container-fluid g-0 min-vh-100 p-0">
      <div className="row g-0 min-vh-100">
        <aside
          className="login-hero-bg col-md-6 d-none d-md-flex flex-column justify-content-end position-relative text-white p-4 p-lg-5"
          style={{ backgroundImage: `url(${heroUrl})` }}
          aria-hidden="true"
        >
          <div className="login-hero-overlay position-absolute top-0 start-0 w-100 h-100" />
          <div className="position-relative z-1" style={{ maxWidth: '28rem' }}>
            <h2 className="fw-bold lh-sm mb-3 fs-3">Sistema de Gestión Inmobiliaria</h2>
            <p className="mb-4 small opacity-90 lh-base">
              Centralice propiedades, contratos y reclamos en un solo lugar. Tome decisiones con
              información clara y actualizada.
            </p>
            <div className="login-hero-dots d-flex gap-2" role="presentation">
              <span className="is-active" />
              <span />
              <span />
            </div>
          </div>
        </aside>

        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-white py-5 px-3 px-md-4">
          <div className="login-form-max w-100">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div
                className="bg-inmobi text-white d-inline-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                style={{ width: '2.75rem', height: '2.75rem' }}
                aria-hidden="true"
              >
                <Building2 size={22} strokeWidth={2} />
              </div>
              <span className="text-inmobi fw-bold fs-4 lh-1">Inmobi</span>
            </div>

            <h1 className="fw-bold fs-4 mb-1 text-dark">Bienvenido de nuevo</h1>
            <p className="text-secondary small mb-4 lh-base">
            
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label className="form-label small text-secondary mb-1" htmlFor="login-email">
                Correo electrónico
              </label>
              <div className="input-group mb-3 shadow-sm rounded-3 overflow-hidden">
                <span className="input-group-text bg-white border-end-0 text-secondary ps-3">
                  <Mail size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="form-control border-start-0 ps-0"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="d-flex align-items-baseline justify-content-between gap-2 mb-1">
                <label className="form-label small text-secondary mb-0" htmlFor="login-password">
                  Contraseña
                </label>
                <a
                  className="small link-primary text-decoration-none"
                  href="#recuperar"
                  onClick={(e) => e.preventDefault()}
                >
                  ¿Olvidó su contraseña?
                </a>
              </div>
              <div className="input-group mb-3 shadow-sm rounded-3 overflow-hidden">
                <span className="input-group-text bg-white border-end-0 text-secondary ps-3">
                  <Lock size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  className="form-control border-start-0 border-end-0 px-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary border-start-0 px-3"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                <label className="form-check-label small text-secondary" htmlFor="remember">
                  Recordar este dispositivo
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-inmobi w-100 py-2 fw-semibold d-inline-flex align-items-center justify-content-center gap-2 rounded-3"
              >
                Iniciar sesión
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>

            <div className="d-flex align-items-center gap-3 my-4">
              <hr className="flex-grow-1 opacity-25 m-0" />
              <span className="small text-secondary text-uppercase fw-semibold text-nowrap">
                ¿Nuevo en Inmobi?
              </span>
              <hr className="flex-grow-1 opacity-25 m-0" />
            </div>

            <button
              type="button"
              className="btn btn-outline-secondary w-100 py-2 rounded-3"
              disabled
              title="Próximamente"
            >
              Crear una cuenta
            </button>

            <p className="text-center small text-secondary mt-4 mb-0 lh-sm px-1">
              © 2026 Inmobi Asset Management. Plataforma segura de administración de propiedades.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
