import React from 'react'

const WorkExperience = () => {
  return (
    <div className='flex flex-col gap-y-[16px] md:gap-y-[64px]'>
      <div>
        <h3 className='font-headline font-bold text-2xl md:text-5xl'>Fullstack Developer</h3>
        <span className='font-semibold md:text-3xl'>Fresh Tracks Canada</span>
        <div className='font-content flex flex-col pb-4 md:text-2xl'>
          <span>2024.01 - 2024.03</span>
        </div>
      </div>
      <div>
        <h3 className='font-headline font-bold text-2xl md:text-5xl'>Backend Developer</h3>
        <span className='font-semibold md:text-3xl'>eEpic</span>
        <div className='font-content flex flex-col pb-4 md:text-2xl'>
          <span>2023.08 - 2023.11</span>
        </div>
      </div>
      <div>
        <h3 className='font-headline font-bold text-2xl md:text-5xl'>Frontend Developer</h3>
        <span className='font-semibold md:text-3xl'>80&Company</span>
        <div className='font-content flex flex-col pb-4 md:text-2xl'>
          <span>2023.01 - 2023.09</span>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
