import {
  BedDouble,
  Bath,
  Sofa,
  ChefHat,
  Utensils,
  Wifi,
  Tv,
  WashingMachine,
  Cctv,
  ShieldCheck,
  Film,
  SatelliteDish,
  Clapperboard,
  Gamepad2,
  Microwave,
  Sparkles,
  Lock,
  MapPin,
  ConciergeBell,
} from 'lucide-react'

// Central map so data modules can reference icons by name (as strings).
const ICONS = {
  BedDouble,
  Bath,
  Sofa,
  ChefHat,
  Utensils,
  Wifi,
  Tv,
  WashingMachine,
  Cctv,
  ShieldCheck,
  Film,
  SatelliteDish,
  Clapperboard,
  Gamepad2,
  Microwave,
  Sparkles,
  Lock,
  MapPin,
  ConciergeBell,
}

/**
 * Renders a Lucide icon by name. Falls back to a neutral mark.
 * @param {object} props
 * @param {string} props.name
 */
export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.4, ...rest }) {
  const Cmp = ICONS[name] ?? Sparkles
  return <Cmp className={className} strokeWidth={strokeWidth} {...rest} />
}
