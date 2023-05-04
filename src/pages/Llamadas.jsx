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
      <Slider
        img={[imageLlamada1, imageLlamada2, imageLlamada3, imageLlamadaFiltro]} imgText={['Me hace mucha gracia. Mi novia pensativa mientras hacemos llamadita',
          'En esta es mi novia con cara de asco mientras estudia', 'Mi novia a punto de ser koala de nuevo, como no...',
          'La primera vez que hicimos un meet para ver una serie juntos y acabamos durante más de media hora probándonos filtros y riéndonos muchísimo. Me encanta y te amo']}
      />
      <Button text='Volver' link='memories' />
    </div>
  )
}
