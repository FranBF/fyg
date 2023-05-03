import { Button } from '../components/Button'

export function Where () {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <h1>¿Qué es lo que quieres ver?</h1>
      <div className='flex items-center justify-between mt-4 w-3/4'>
        <Button text='Madrid' link='madrid' />
        <Button text='Sitios' link='places' />
        <Button text='Cenas' link='dinner' />
        <Button text='Llamadas' link='calls' />
      </div>
    </div>
  )
}
