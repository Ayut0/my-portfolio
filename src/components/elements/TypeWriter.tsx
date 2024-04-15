import React, { Fragment } from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const TypeWriter = () => {
  const [text, count] = useTypewriter({
    words: ['resilient', 'collaborative', 'passionate about problem solving', 'humble'],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <Fragment>
      <div className='font-headline break-before-all text-center items-center pt-9 md:py-14 text-light-heading dark:text-headline-dark'>
        <span className='text-3xl'>I am </span>
        <div className='w-90 m-center h-32 mt-2 md:w-70'>
          <span className='text-[2.5rem] font-bold md:text-7xl'>{text}</span>
        </div>
      </div>
    </Fragment>
  )
}

export default TypeWriter
