import { Star, Quote } from 'lucide-react'
import Reveal from '../components/Reveal'
import { REVIEWS, GOOGLE_RATING, GOOGLE_REVIEWS } from '../data/reviews'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-graphite py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-soft">Guest Reviews</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 max-w-xl text-4xl leading-[1.12] text-ivory sm:text-5xl">
                Kind words from recent stays.
              </h2>
            </Reveal>
          </div>

          <Reveal className="flex shrink-0 items-center gap-4 rounded-sm border border-ivory/15 px-5 py-4">
            <span className="font-display text-4xl font-semibold text-ivory">{GOOGLE_RATING}</span>
            <span className="flex flex-col">
              <span className="flex items-center gap-0.5 text-champagne" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-champagne" />
                ))}
              </span>
              <span className="mt-1 text-xs text-ivory/60">
                {GOOGLE_REVIEWS} Google reviews
              </span>
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal
              as="figure"
              key={review.name}
              delay={i * 100}
              className="flex h-full flex-col rounded-sm border border-ivory/12 bg-charcoal p-7"
            >
              <Quote className="h-8 w-8 text-champagne/40" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 font-display text-xl italic leading-relaxed text-ivory/90">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-ivory/12 pt-5 text-sm font-medium tracking-wide text-ivory/80">
                {review.name}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
