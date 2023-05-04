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
      <Slider
        img={[imageGemmaRosa, imageCampNou, imageGemmaBebe, imageGemmaMimida, imageTeatro]} imgText={['Me encantó regalarle una bonita rosa a alguien tan bonita como tu',
          'Una de mis imagenes favoritas hechas en posiblemente la noche más especial que hemos pasado juntos y una de las más especiales de mi vida. Nunca podré estar tan agradecido. Te amo',
          'Mi amoooooor, pero como podías ser tan bonita y seguir siendo tan preciosa. Es una de mis fotos favoritas de ti. Así será nuestra hijita?🤭',
          'Aquí está el claro ejemplo de que mi novia es un pedazo de koala que flipas. Me encanta y encima está mimida en mi casa.',
          'Otra de las noches más especiales que hemos pasado nunca. Fue absolutamente increíble. Necesitamos hacer más planes así']}
      />
      <Button text='Volver' link='memories' />
    </div>
  )
}
