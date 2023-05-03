import { Slider } from '../components/Slider'
import { Button } from '../components/Button'
import imageLlamada1 from '../public/ImagenesGemma/Llamada1.png'
import imageLlamada2 from '../public/ImagenesGemma/Llamada2.jpg'
import imageLlamada3 from '../public/ImagenesGemma/Llamada3.jpg'
import imageLlamadaFiltro from '../public/ImagenesGemma/LlamadaFiltro.jpg'

export function Llamadas () {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-xl font-bold'>Llamadas</h2>
      <Slider img={[imageLlamada1, imageLlamada2, imageLlamada3, imageLlamadaFiltro]} />
      <Button text='Volver' link='memories' />
    </div>
  )
}
