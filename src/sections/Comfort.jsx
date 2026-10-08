import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { COMFORT_HIGHLIGHTS } from '../data/amenities'

export default function Comfort() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Copy */}
          <div>
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-dark">Everyday Comfort</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 text-4xl leading-[1.12] text-graphite sm:text-5xl">
                Everything you need for a more independent stay.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
                A fully furnished kitchen with high-end appliances and utensils,
                an on-site washing machine and high-speed WiFi — the practical
                comforts that make a longer stay feel effortless and genuinely
                your own.
              </p>
            </Reveal>
          </div>

          {/* Highlights */}
          <Reveal className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {COMFORT_HIGHLIGHTS.map((item) => (
              <div key={item.label} className="flex items-center gap-4 border-b border-graphite/10 pb-5">
                <Icon name={item.icon} className="h-6 w-6 shrink-0 text-champagne-dark" />
                <span className="text-[0.95rem] text-graphite/85">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
