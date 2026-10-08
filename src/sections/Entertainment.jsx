import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { ENTERTAINMENT } from '../data/amenities'

export default function Entertainment() {
  return (
    <section className="bg-charcoal py-20 text-ivory sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 text-center">
          <Reveal className="flex flex-col items-center gap-4">
            <span className="eyebrow text-champagne-soft">Stay In</span>
            <span className="hairline mx-auto" aria-hidden="true" />
          </Reveal>
          <Reveal>
            <h2 className="text-3xl text-ivory sm:text-4xl md:text-5xl">
              Nights worth staying in for.
            </h2>
          </Reveal>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {ENTERTAINMENT.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={(i % 5) * 70}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/15 text-champagne-soft">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <span className="text-sm leading-snug text-ivory/80">{item.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
