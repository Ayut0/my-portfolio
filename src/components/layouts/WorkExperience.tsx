import { motion } from 'framer-motion'
import React from 'react'
import WorkExperience from '../elements/Experience'
import ExperienceCard from '../elements/ExperienceCard'
import Heading from '../elements/Heading'
import type { WorkExperience as WorkExperienceType } from 'typings'

type Props = {
  experience: WorkExperienceType[]
}

const Experience = ({ experience }: Props) => {
  return (
    <section
      id='experience'
      className='bg-light-secondary dark:bg-dark pt-48 h-[56vh] md:h-[60vh] md:pt-4'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='text-light-heading dark:text-paragraph-dark'
      >
        <Heading itemNumber='02' title='Experience' />
        <div className='w-[70%] lg:w-90 m-center pt-12'>
          {/* {experience === null ? <WorkExperience /> : <ExperienceCard experience={experience} />} */}
          <WorkExperience />
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
