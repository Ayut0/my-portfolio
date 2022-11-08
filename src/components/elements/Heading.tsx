import React from 'react'

type HeadingProps = {
  itemNumber: string
  title: string
}

// use at every headings
const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <div className='flex w-4/5'>
      <div className='flex text-center items-center w-full md:w-1/2 justify-evenly'>
        <span className=' text-highlight-dark text-2xl md:text-4xl'>{props.itemNumber}.</span>
        <h2 className='heading-stroke font-headline text-headline-dark font-bold text-3xl md:text-5xl'>
          {props.title}
        </h2>
        <span className='bg-[#E3E3E1] h-[1px] w-24  md:w-80'></span>
      </div>
    </div>
  )
}

export default Heading
