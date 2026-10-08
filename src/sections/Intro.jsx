import Reveal from '../components/Reveal'

export default function Intro() {
  return (
    <section id="intro" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="eyebrow text-champagne-dark">The Grey Ivy Residence</span>
          <span className="hairline" aria-hidden="true" />
        </Reveal>

        <Reveal>
          <h2 className="mx-auto mt-7 max-w-3xl text-4xl leading-[1.08] text-graphite sm:text-5xl md:text-6xl">
            A quieter way to stay in Abuja.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate">
            Grey Ivy offers the privacy of a home with the thoughtful hospitality
            of a serviced residence — a refined space for business trips, leisure,
            extended stays and moments when you simply want to slow down.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
