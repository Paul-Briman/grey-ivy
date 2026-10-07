/**
 * Site footer.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
        &copy; {year} Grey Ivy Luxury Apartments. All rights reserved.
      </div>
    </footer>
  )
}
