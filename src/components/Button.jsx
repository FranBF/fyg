import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Button ({ text, link }) {
  return (
    <Link to={`/${link}`} className='w-1/4 flex justify-center items-center border-2 border-yellow-400 rounded-md'>
      <button>{text}</button>
      <FaArrowRight className='ml-4' />
    </Link>
  )
}
