export function Button({ children, className = '', variant = 'primary', ...props }) {
  return (
    <button type="button" className={`btn btn-${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
