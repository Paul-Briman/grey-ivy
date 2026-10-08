import { Phone, ArrowDown } from 'lucide-react'
import Button from '../components/Button'
import heroImage from '../assets/grey-ivy 4.png'
import { PHONE_TEL } from '../lib/contact'
import { BRAND } from '../data/site'

const DETAILS = ['2 Bedrooms', '2 Bathrooms', 'Fully Furnished']

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Cinematic image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="The elegant living room at Grey Ivy Luxury Apartments, Guzape — marble feature wall, statement chandelier and grey seating"
          className="h-full w-full object-cover animate-slow-zoom"
          style={{ objectPosition: '50% 45%' }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-28 pt-32 sm:px-8">
        <div className="reveal is-visible max-w-2xl">
          <div className="flex items-center gap-3 text-champagne-soft">
            <span className="hairline" aria-hidden="true" />
            <span className="eyebrow">{BRAND.locality}</span>
          </div>

          <p className="mt-7 font-sans text-xs uppercase tracking-[0.42em] text-ivory/70">
            Grey Ivy · Luxury Apartments
          </p>

          <h1 className="mt-4 text-5xl leading-[1.02] text-ivory sm:text-6xl md:text-7xl">
            Your private stay
            <br />
            in <span className="italic text-champagne-soft">Guzape.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">
            Thoughtfully designed for quiet escapes, extended stays, business
            trips and memorable visits to Abuja.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={`tel:${PHONE_TEL}`} variant="champagne" size="lg" icon={<Phone className="h-4 w-4" />}>
              Book Your Stay
            </Button>
            <Button href="#stay" variant="outlineLight" size="lg">
              Explore the Apartment
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom detail strip */}
      <div className="relative z-10 border-t border-ivory/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-10">
            {DETAILS.map((d) => (
              <li key={d} className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-ivory/75">
                {d}
              </li>
            ))}
          </ul>
          <a
            href="#intro"
            aria-label="Scroll to content"
            className="hidden text-ivory/60 transition-colors hover:text-ivory sm:block"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
