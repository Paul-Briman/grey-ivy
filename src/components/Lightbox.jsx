import { useEffect, useRef, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Accessible image lightbox: Escape to close, arrow keys to navigate,
 * focus trapped on the close button, basic touch-swipe on mobile.
 *
 * @param {object} props
 * @param {Array<{src:string, alt:string, caption?:string}>} props.images
 * @param {number} props.index
 * @param {(i:number)=>void} props.onNavigate
 * @param {()=>void} props.onClose
 */
export default function Lightbox({ images, index, onNavigate, onClose }) {
  const closeRef = useRef(null)
  const touchX = useRef(null)
  const image = images[index]

  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate],
  )
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate],
  )

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [prev, next, onClose])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 48) (dx > 0 ? prev : next)()
    touchX.current = null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}: ${image.caption || image.alt}`}
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-ivory/60">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          aria-label="Close gallery"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ivory transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Image */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 sm:px-16"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous image"
          className="absolute left-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-white/10 hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:left-5"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-lift"
          />
          {image.caption && (
            <figcaption className="mt-4 font-display text-xl italic text-ivory/80">
              {image.caption}
            </figcaption>
          )}
        </figure>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next image"
          className="absolute right-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-white/10 hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:right-5"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>
    </div>
  )
}
