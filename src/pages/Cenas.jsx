import { Slider } from '../components/Slider'
import { Button } from '../components/Button'
import imageCena1 from '../public/ImagenesGemma/Cena1.jpg'
import imageCena2 from '../public/ImagenesGemma/CenaHamburguesaMadrid.jpg'
import imageCena3 from '../public/ImagenesGemma/CenaMadrid.jpg'

export function Cenas () {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-xl font-bold'>Llamadas</h2>
      <Slider img={[imageCena1, imageCena2, imageCena3]} />
      <Button text='Volver' link='memories' />
    </div>
  )
}
