import { MapPin, Navigation, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { ADDRESS_LINES, MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from '../lib/contact'

export default function Location() {
  return (
    <section id="location" className="bg-stone py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-dark">Location</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 text-4xl leading-[1.12] text-graphite sm:text-5xl">
                Quietly set in
                <br />
                <span className="italic text-champagne-dark">Guzape Hills.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
                A peaceful, secure setting in Guzape, Abuja — close enough to the
                city, far enough to feel like a retreat.
              </p>
            </Reveal>
          </div>

          {/* Address card */}
          <Reveal className="flex flex-col justify-center gap-6 rounded-sm border border-graphite/10 bg-ivory p-8 shadow-soft sm:p-10">
            <div>
              <h3 className="font-display text-2xl text-graphite">
                Grey Ivy Luxury Apartments Guzape
              </h3>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-champagne-dark" strokeWidth={1.6} />
              <p className="text-graphite/85">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-champagne-dark" strokeWidth={1.6} />
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-lg text-graphite transition-colors hover:text-champagne-dark"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="pt-2">
              <Button
                href={MAPS_URL}
                external
                variant="outline"
                icon={<Navigation className="h-4 w-4" />}
              >
                Get Directions
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
