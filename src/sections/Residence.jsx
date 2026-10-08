import Reveal from '../components/Reveal'
import residenceImage from '../assets/grey-ivy 7.png'
import { RESIDENCE_FACTS } from '../data/site'

export default function Residence() {
  return (
    <section id="stay" className="bg-stone py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-sm shadow-lift">
              <img
                src={residenceImage}
                alt="Grey Ivy living room in warm evening light, beneath a sculptural LED ceiling and crystal chandelier"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* overlapping facts card */}
            <div className="absolute -right-3 -bottom-6 hidden rounded-sm border border-graphite/10 bg-ivory px-7 py-5 shadow-soft sm:flex sm:gap-8 lg:-right-8">
              {RESIDENCE_FACTS.map((f) => (
                <div key={f.label} className="text-center">
                  <div className="font-display text-3xl text-graphite">{f.value}</div>
                  <div className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-taupe">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-dark">The Residence</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 text-4xl leading-[1.1] text-graphite sm:text-5xl">
                Designed to feel like home.
                <span className="italic text-champagne-dark"> Elevated</span> to feel
                like somewhere special.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
                Grey Ivy is one complete two-bedroom apartment — a comfortable
                living room, a fully furnished kitchen, premium linens and
                considered details throughout. Private, calm and ready for you to
                simply settle in.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-8 font-display text-2xl italic text-graphite/80">
                Two bedrooms. One beautifully considered space.
              </p>
            </Reveal>

            {/* mobile facts row */}
            <Reveal className="mt-8 flex gap-8 border-t border-graphite/10 pt-6 sm:hidden">
              {RESIDENCE_FACTS.map((f) => (
                <div key={f.label}>
                  <div className="font-display text-3xl text-graphite">{f.value}</div>
                  <div className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-taupe">
                    {f.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
