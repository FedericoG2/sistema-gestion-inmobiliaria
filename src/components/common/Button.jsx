export function Button({ children, className = '', variant = 'primary', type = 'button', ...props }) {
  return (
    <button type={type} className={`btn btn-${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
