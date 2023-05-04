import imageRetiroLeones from '../public/ImagenesGemma/MadridRetiroLeones.jpg'
import imageCibelesBeso from '../public/ImagenesGemma/MadridCibelesBeso.jpg'
import imageCibelesJuntos from '../public/ImagenesGemma/MadridCibelesJuntos.jpg'
import imageCibeles from '../public/ImagenesGemma/Cibeles.jpg'
import imagePinta from '../public/ImagenesGemma/Pinta.jpg'
import imageRechulones from '../public/ImagenesGemma/Rechulones.jpg'
import { Slider } from '../components/Slider'
import { Button } from '../components/Button'
export function Madrid () {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-xl font-bold'>Madrid</h2>
      <Slider
        img={[imageCibelesBeso, imageCibelesJuntos, imageRetiroLeones, imageCibeles, imagePinta, imageRechulones]} imgText={['Mi niña y yo en la cibeles que tanto le gusta a ella dándole un besito.',
          'Mi niña y yo de nuevo. Mira que eres guapa eh...', 'Por dios, la foto en el retiro. Finalmente no pudimos ir a las barquitas porque estaba petado 😪',
          'La cibeles que tanto le gusta a mi niña por su Real Madrid(perdedores)', 'La noche de la pinta fue super especial. Nos vinimos aquí después de pasar por calles llenas de panchitos que querían invitarnos a chupitos',
          'Aquí están los más rechulones de madrid, en el primark con sus gafas de vigilantes de la playa. Somos los mejores']}
      />
      <Button text='Volver' link='memories' />
    </div>
  )
}
