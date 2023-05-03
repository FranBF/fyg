import { Slider } from '../components/Slider'
import imageGemmaRosa from '../public/ImagenesGemma/GemmaRosa.jpg'
import imageCampNou from '../public/ImagenesGemma/CampNou.jpg'
import imageGemmaBebe from '../public/ImagenesGemma/Mibebe.jpg'
import imageGemmaMimida from '../public/ImagenesGemma/Mimida1.jpg'
import imageTeatro from '../public/ImagenesGemma/Teatro.jpg'
import { Button } from '../components/Button'

export function Sitios () {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-xl font-bold'>Nosotros</h2>
      <Slider img={[imageGemmaRosa, imageCampNou, imageGemmaBebe, imageGemmaMimida, imageTeatro]} />
      <Button text='Volver' link='memories' />
    </div>
  )
}
