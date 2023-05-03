import imageRetiroLeones from '../public/ImagenesGemma/MadridRetiroLeones.jpg'
import imageCibelesBeso from '../public/ImagenesGemma/MadridCibelesBeso.jpg'
import imageCibelesJuntos from '../public/ImagenesGemma/MadridCibelesJuntos.jpg'
import imageCibeles from '../public/ImagenesGemma/cibeles.jpg'
import imagePinta from '../public/ImagenesGemma/Pinta.jpg'
import imageRechulones from '../public/ImagenesGemma/Rechulones.jpg'
import { Slider } from '../components/Slider'
import { Button } from '../components/Button'
export function Madrid () {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-xl font-bold'>Madrid</h2>
      <Slider img={[imageCibelesBeso, imageCibelesJuntos, imageRetiroLeones, imageCibeles, imagePinta, imageRechulones]} />
      <Button text='Volver' link='memories' />
    </div>
  )
}
