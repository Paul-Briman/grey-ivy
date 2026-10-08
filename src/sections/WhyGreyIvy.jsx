import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { PILLARS } from '../data/site'

export default function WhyGreyIvy() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex flex-col items-center gap-4">
            <span className="eyebrow text-champagne-dark">Why Grey Ivy</span>
            <span className="hairline mx-auto" aria-hidden="true" />
          </Reveal>
          <Reveal>
            <h2 className="mt-6 text-4xl leading-[1.12] text-graphite sm:text-5xl">
              A stay defined by the details.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 4) * 80} className="text-center sm:text-left">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40 text-champagne-dark">
                <Icon name={pillar.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-graphite">{pillar.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
