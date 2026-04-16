import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/common/Button.jsx'

export function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-4">
      <div className="card shadow-sm" style={{ maxWidth: 420, width: '100%' }}>
        <div className="card-body p-4">
          <h1 className="h4 mb-1">Acceso</h1>
          <p className="text-muted small mb-4">Sistema de gestión inmobiliaria</p>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={() => navigate('/admin/dashboard')}>
              Panel administración
            </Button>
            <Button variant="outline-primary" onClick={() => navigate('/usuario/mi-contrato')}>
              Área inquilino
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
