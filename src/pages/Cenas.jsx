import { Slider } from '../components/Slider'
import { Button } from '../components/Button'
import imageCena1 from '../public/ImagenesGemma/Cena1.jpg'
import imageCena2 from '../public/ImagenesGemma/CenaHamburguesaMadrid.jpg'
import imageCena3 from '../public/ImagenesGemma/CenaMadrid.jpg'

export function Cenas () {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-xl font-bold'>Cenas</h2>
      <Slider
        img={[imageCena1, imageCena2, imageCena3]} imgText={['Mi novia disfrutando de una buena smash en el Plou',
          'Porfi amor no me hagas fotos(mientras disfrutamos de otra buena smash pero en Chueca con los gayses)', 'La cena `romántica` de Madrid. La verdad es que la disfruté. Te amo']}
      />
      <Button text='Volver' link='memories' />
    </div>
  )
}
