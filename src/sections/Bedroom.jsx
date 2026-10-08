import Reveal from '../components/Reveal'
import bedroomImage from '../assets/grey-ivy 1.png'

export default function Bedroom() {
  return (
    <section id="experience" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-dark">The Bedroom</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 text-4xl leading-[1.1] text-graphite sm:text-5xl md:text-6xl">
                A private place
                <br />
                to <span className="italic text-champagne-dark">unwind.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
                Soft, restful and quietly luxurious — the bedrooms are dressed in
                premium linens and designed for genuine rest, with the privacy of
                a home that&apos;s yours alone.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="mt-8 flex flex-col gap-3 text-sm text-graphite/80">
                {['Peaceful, restful atmosphere', 'Premium linens', 'Private and your own'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-champagne" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal className="overflow-hidden rounded-sm shadow-lift">
            <img
              src={bedroomImage}
              alt="A Grey Ivy bedroom with an upholstered bed, crisp white linens and a backlit textured feature wall"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover sm:aspect-[4/5]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
