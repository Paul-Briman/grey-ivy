import Nav from './components/Nav'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Residence from './sections/Residence'
import Bedroom from './sections/Bedroom'
import Living from './sections/Living'
import Comfort from './sections/Comfort'
import Entertainment from './sections/Entertainment'
import Amenities from './sections/Amenities'
import WhyGreyIvy from './sections/WhyGreyIvy'
import Reviews from './sections/Reviews'
import Gallery from './sections/Gallery'
import Location from './sections/Location'
import BookingCTA from './sections/BookingCTA'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Residence />
        <Bedroom />
        <Living />
        <Comfort />
        <Entertainment />
        <Amenities />
        <WhyGreyIvy />
        <Reviews />
        <Gallery />
        <Location />
        <BookingCTA />
      </main>
      <Footer />
      <FloatingCTA />
      {/* Spacer so the mobile sticky CTA never hides footer content */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  )
}
