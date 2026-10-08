/**
 * Styled link used for CTAs. Renders an <a> so it works for section anchors,
 * tel: links and external links alike. Restrained, premium styling.
 *
 * @param {object} props
 * @param {string} props.href
 * @param {'dark'|'champagne'|'outline'|'outlineLight'} [props.variant='dark']
 * @param {'md'|'lg'} [props.size='md']
 * @param {boolean} [props.external]
 * @param {React.ReactNode} [props.icon]
 */
export default function Button({
  href,
  variant = 'dark',
  size = 'md',
  external = false,
  icon,
  className = '',
  children,
  ...rest
}) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full font-medium uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

  const sizes = {
    md: 'px-6 py-3 text-[0.72rem]',
    lg: 'px-8 py-4 text-[0.78rem]',
  }

  const variants = {
    dark: 'bg-graphite text-ivory hover:bg-ink hover:-translate-y-0.5 shadow-soft focus-visible:ring-graphite',
    champagne:
      'bg-champagne text-ink hover:bg-champagne-soft hover:-translate-y-0.5 shadow-soft focus-visible:ring-champagne',
    outline:
      'border border-graphite/25 bg-transparent text-graphite hover:border-graphite/60 hover:bg-graphite/[0.04] focus-visible:ring-graphite',
    outlineLight:
      'border border-ivory/40 bg-ivory/5 text-ivory backdrop-blur-sm hover:bg-ivory/15 hover:border-ivory/80 focus-visible:ring-ivory',
  }

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...externalProps}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  )
}
