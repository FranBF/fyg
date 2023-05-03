import { Button } from '../components/Button'

export function Introduction () {
  return (
    <div className='w-1/2 h-1/2 border-red-600 border-2 flex justify-center items-center flex-col'>
      <div className='w-[90%] h-[90%] flex flex-col items-center'>
        <h1 className='text-xl font-bold'>¡Mi niña la más lista!</h1>
        <p className='mt-2'>Desde ahora vas a empezar a leer esto que te escribo para más tarde, repasar unas cuantas de las cosas que hemos hecho en pareja.
          Antes de ello quiero decirte que te amo más que a nada en el mundo. Eres la persona más especial que he conocido y me encanta estar contigo.
          A pesar de todas las peleas que hayamos tenido seguimos adelante y acabámos amándonos igual o más que antes y eso me encanta.
          Dicho esto, voy a reirme un poco de ti por lo que te he ido diciendo estos días. No, no he ido a BCN a comprarte nada. No, no hay nada físico, siento decepcionarte.
          Nadie ha estado compinchado y no llevaba una semana preparando todo esto, realmente llevo dos o tres días haciendo la página y lo pensé en un día. Simplemente
          quería hacerte algún detalle en algún momento de nuestra relación. Decirte que este es el primero de muchos. Mejoraré en cuanto a los detalles y regalos, lo prometo.
          Lo siento si este no ha sido el mejor o no te ha gustado, lo entiendo. Simplemente es el primero de todos y está hecho con todo mi cariño y amor, como todos aquellos
          que vengan en un futuro. Nada más que decir, simplemente disfruta de este "mini viaje" y sobretodo, TE AMO ❤️ .
        </p>
      </div>
      <Button text='Siguiente' link='memories' />
    </div>
  )
}
