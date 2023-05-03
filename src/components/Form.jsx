import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export function Form () {
  const [inputValue, setInputValue] = useState()
  const [goodAnswer, setGoodAnswer] = useState(true)
  const navigate = useNavigate()
  const handleClick = () => {
    console.log(inputValue)
    document.getElementById('input').value = ''
    if (inputValue.toLowerCase() !== 'putita') {
      setGoodAnswer(false)
    } else {
      navigate('/intro')
    }
  }
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between w-48 h-24'>
        <input type='text' className='rounded-md w-3/4 text-black' id='input' onChange={(e) => setInputValue(e.target.value)} />
        <FaArrowRight className='self-center w-1/4 hover:cursor-pointer hover:w-2/4 hover:h-12 h-6 hover:ease-in' onClick={handleClick} />
      </div>
      <div className={goodAnswer && 'hidden'}>
        {!goodAnswer && <p>SEGURO QUE ERES TU?</p>}
      </div>
    </div>
  )
}
