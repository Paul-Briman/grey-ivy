import { Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import ctaImage from '../assets/grey-ivy 7.png'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/contact'

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ctaImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ objectPosition: '50% 40%' }}
        />
        <div className="absolute inset-0 bg-ink/78" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="eyebrow text-champagne-soft">Reservations</span>
          <span className="hairline mx-auto" aria-hidden="true" />
        </Reveal>
        <Reveal>
          <h2 className="mt-7 text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
            Make your next stay feel
            <br />
            a little more like <span className="italic text-champagne-soft">home.</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ivory/75">
            For bookings and enquiries, speak with Grey Ivy directly.
          </p>
        </Reveal>
        <Reveal delay={140} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={`tel:${PHONE_TEL}`} variant="champagne" size="lg" icon={<Phone className="h-4 w-4" />}>
            Book Your Stay
          </Button>
          <Button href={`tel:${PHONE_TEL}`} variant="outlineLight" size="lg">
            Call {PHONE_DISPLAY}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
