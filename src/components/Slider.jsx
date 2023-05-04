
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

export function Slider ({ img, imgText }) {
  const [imgPos, setImgPos] = useState(0)

  const handleNext = () => {
    if (imgPos >= img.length - 1) {
      setImgPos(imgPos + 1 - img.length)
    } else {
      setImgPos(imgPos + 1)
      console.log(imgPos)
    }
  }

  const handlePrev = () => {
    if (imgPos <= 0) {
      setImgPos(imgPos + img.length - 1)
      console.log(imgPos)
    } else {
      setImgPos(imgPos - 1)
      console.log(imgPos)
    }
  }

  /* const balls = () => {
    for (let x = 0; x >= img.length; x++) {
      return (<div className={imgPos === imgPos[x] ? 'w-2 rounded-full bg-white h-2' : 'w-2 rounded-full bg-black h-2'} />)
    }
  } */
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='flex items-center justify-center w-full h-80 bor'>
        <img src={img[imgPos]} alt='hola' className='w-[256px] h-[256px]' />
      </div>
      <p>{imgText[imgPos]}</p>
      {/* <div className='flex justify-around w-24 mt-4'>
        <div className={imgPos === 0 ? 'w-2 rounded-full bg-white h-2' : 'w-2 rounded-full bg-black h-2'} />
        <div className={imgPos === 1 ? 'w-2 rounded-full bg-white h-2' : 'w-2 rounded-full bg-black h-2'} />
        <div className={imgPos === 2 ? 'w-2 rounded-full bg-white h-2' : 'w-2 rounded-full bg-black h-2'} />
      </div> */}
      <div className='flex w-24 h-48 items-center justify-between mt-4'>
        <FaArrowLeft onClick={handlePrev} className='hover:cursor-pointer' />
        <FaArrowRight onClick={handleNext} className='hover:cursor-pointer' />
      </div>
    </div>
  )
}
