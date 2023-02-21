import Image from 'next/image'
import React from 'react'
import { urlFor } from 'sanity'
import { WorkExperience } from 'typings'

type Props = {
  experience: WorkExperience[]
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <>
      {experience.map((item, i) => (
        <div key={i} className='flex flex-col gap-y-[16px]'>
          <h3 className='font-headline font-bold text-2xl md:text-5xl'>{item.jobTitle}</h3>
          <span className='font-semibold md:text-3xl'>{item.company}</span>
          <div className='font-content flex flex-col pb-4 md:text-2xl'>
            <span>
              {item.dateStarted} -
              {item.isCurrentlyWorkingHere ? ' Currently Working' : item.dateEnded}
            </span>
          </div>
          <div className='flex items-center space-x-2 mb-6 lg:mb-10'>
            {item?.technologies.map((technology) => (
              <Image
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt={technology.title}
                height={35}
                width={35}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default ExperienceCard
