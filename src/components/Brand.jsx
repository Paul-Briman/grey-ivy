/**
 * Refined text-based Grey Ivy wordmark.
 *
 * @param {object} props
 * @param {boolean} [props.onDark] light treatment for dark/hero backgrounds
 * @param {'sm'|'md'} [props.size='md']
 */
export default function Brand({ onDark = false, size = 'md' }) {
  const nameColor = onDark ? 'text-ivory' : 'text-graphite'
  const subColor = onDark ? 'text-ivory/60' : 'text-taupe'
  const nameSize = size === 'sm' ? 'text-lg' : 'text-xl sm:text-2xl'

  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-display font-semibold tracking-[0.18em] ${nameSize} ${nameColor}`}
      >
        GREY IVY
      </span>
      <span className={`mt-1 text-[0.55rem] font-medium tracking-[0.34em] ${subColor}`}>
        LUXURY APARTMENTS
      </span>
    </span>
  )
}
