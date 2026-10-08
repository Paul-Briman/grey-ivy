import { Phone, MapPin } from 'lucide-react'
import Brand from './Brand'
import Button from './Button'
import { NAV_LINKS } from '../data/site'
import { PHONE_DISPLAY, PHONE_TEL, ADDRESS_INLINE } from '../lib/contact'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-graphite text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Brand onDark />
            <p className="mt-5 max-w-xs font-display text-xl italic leading-snug text-ivory/60">
              A quieter way to stay in Abuja.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="eyebrow text-champagne-soft">Explore</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-champagne-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="eyebrow text-champagne-soft">Reservations</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-ivory/70">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-champagne-soft">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                <span>{ADDRESS_INLINE}</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button href={`tel:${PHONE_TEL}`} variant="champagne">
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-6 text-xs text-ivory/45">
          <p>&copy; {year} Grey Ivy Luxury Apartments Guzape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
