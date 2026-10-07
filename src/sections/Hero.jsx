import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'

/**
 * Landing hero section — placeholder content for the initial scaffold.
 * The real Grey Ivy content will replace this once photos and the design
 * brief are provided.
 */
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
        Project scaffold ready
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Grey Ivy Luxury Apartments
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        React + Vite starter is initialized and building successfully. Replace
        these sections with the real site content when you&apos;re ready.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Button>
          Get started
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button variant="secondary">Learn more</Button>
      </div>
    </section>
  )
}
