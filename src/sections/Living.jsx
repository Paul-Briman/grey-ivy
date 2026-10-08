import Reveal from '../components/Reveal'
import livingImage from '../assets/grey-ivy 3.png'

export default function Living() {
  return (
    <section className="bg-graphite py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Image */}
          <Reveal className="order-2 overflow-hidden rounded-sm shadow-lift lg:order-1">
            <img
              src={livingImage}
              alt="The Grey Ivy living room in daylight, with a soft sectional sofa and floor-to-ceiling curtains"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-soft">The Living Room</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 text-4xl leading-[1.1] text-ivory sm:text-5xl">
                More than a place
                <br />
                to <span className="italic text-champagne-soft">sleep.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/75">
                Settle into a space designed for living — whether the day calls
                for work, rest, conversation or simply doing nothing at all.
                Stylishly furnished, with entertainment on hand and a calm,
                unhurried feel throughout.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <blockquote className="mt-8 border-l-2 border-champagne pl-5 font-display text-2xl italic leading-snug text-ivory/85">
                &ldquo;A perfect blend of comfort and luxury — truly a home away
                from home.&rdquo;
                <cite className="mt-3 block font-sans text-xs uppercase not-italic tracking-[0.2em] text-ivory/50">
                  Maryann Nkemdilim · Guest review
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
