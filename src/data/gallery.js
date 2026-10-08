// -------------------------------------------------------------------
// Gallery images. Uses only the real Grey Ivy photography.
// Excluded by design: grey-ivy 2 (weak bathroom) and grey-ivy 6
// (promotional graphic / content source only).
// -------------------------------------------------------------------

import living from '../assets/grey-ivy 4.png'
import livingEvening from '../assets/grey-ivy 7.png'
import bedroom from '../assets/grey-ivy 1.png'
import livingDay from '../assets/grey-ivy 3.png'
import entertainment from '../assets/grey-ivy 5.png'

export const GALLERY = [
  {
    src: living,
    alt: 'Grey Ivy living room with a marble feature wall, statement chandelier and grey seating',
    caption: 'The living room',
    orientation: 'landscape',
  },
  {
    src: livingEvening,
    alt: 'Grey Ivy living room in warm evening light beneath an LED ceiling and crystal chandelier',
    caption: 'Evenings in',
    orientation: 'portrait',
  },
  {
    src: bedroom,
    alt: 'Grey Ivy bedroom with an upholstered bed and a backlit textured feature wall',
    caption: 'The bedroom',
    orientation: 'portrait',
  },
  {
    src: livingDay,
    alt: 'Grey Ivy living room in daylight with a soft sectional sofa and floor-to-ceiling curtains',
    caption: 'Living space',
    orientation: 'portrait',
  },
  {
    src: entertainment,
    alt: 'Grey Ivy entertainment wall with a smart TV and media console',
    caption: 'Stay in',
    orientation: 'square',
  },
]
