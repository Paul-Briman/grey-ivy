import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { PHONE_TEL } from '../lib/contact'

/**
 * Subtle fixed booking CTA on mobile only, appearing after the hero so it
 * never covers first-view content. Respects safe-area insets.
 */
export default function FloatingCTA() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-graphite/10 bg-ivory/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 sm:hidden ${
        shown ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-graphite py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.2em] text-ivory shadow-soft transition-colors hover:bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2"
      >
        <Phone className="h-4 w-4" />
        Book Your Stay
      </a>
    </div>
  )
}
