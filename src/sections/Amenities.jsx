import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { AMENITIES } from '../data/amenities'

export default function Amenities() {
  return (
    <section id="amenities" className="bg-stone py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow text-champagne-dark">Amenities</span>
            <span className="hairline" aria-hidden="true" />
          </Reveal>
          <Reveal>
            <h2 className="mt-6 text-4xl leading-[1.12] text-graphite sm:text-5xl">
              Considered in every detail.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Everything that makes Grey Ivy a seamless place to stay — thoughtfully
              provided and ready on arrival.
            </p>
          </Reveal>
        </div>

        {/* Editorial grid with thin borders */}
        <Reveal className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-graphite/12 bg-graphite/12 sm:grid-cols-3 lg:grid-cols-4">
          {AMENITIES.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-4 bg-stone px-5 py-6 transition-colors duration-500 hover:bg-ivory"
            >
              <Icon name={a.icon} className="h-6 w-6 shrink-0 text-champagne-dark" />
              <span className="text-sm leading-snug text-graphite/85">{a.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
