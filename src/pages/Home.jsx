import { useState } from 'react'
import { Form } from '../components/Form'
import { FaQuestion } from 'react-icons/fa'

export function Home () {
  const [hint, setHint] = useState(false)
  const handleHint = () => {
    setHint(true)
  }
  return (
    <div className='h-full w-full items-center justify-center flex flex-col'>
      <h1>Hola mi amor. Quiero empezar diciendote que te amo y que hago esto con todo el amor del mundo.</h1>
      <br />
      <p>Si consigues adivinar la clave secreta podrás avanzar. Solo tu la sabes y es la forma de asegurarme que únicamente tu eres la que entra a esto.</p>

      <h2 className={!hint && 'hidden'}><br />Pista: Lo que tu y yo somos pero en femenino singular... </h2>
      <Form />
      <div className='flex items-center text-[12px]'>
        <p>Si no consigues adivinar la clave dale al interrogante </p>
        <FaQuestion className='border-2 border-white rounded-full' onClick={handleHint} />
      </div>
    </div>
  )
}
