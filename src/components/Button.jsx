/**
 * Reusable button. Variants keep styling consistent across the site.
 *
 * @param {object} props
 * @param {'primary' | 'secondary'} [props.variant='primary']
 * @param {React.ReactNode} props.children
 */
export default function Button({ variant = 'primary', children, ...rest }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-500',
    secondary:
      'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-400',
  }

  return (
    <button className={`${base} ${variants[variant]}`} {...rest}>
      {children}
    </button>
  )
}
