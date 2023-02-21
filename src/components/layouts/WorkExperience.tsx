import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from '../elements/ExperienceCard'
import Heading from '../elements/Heading'
import { WorkExperience } from 'typings'

type Props = {
  experience: WorkExperience[]
}

const Experience = ({ experience }: Props) => {
  return (
    <section
      id='experience'
      className='bg-light-secondary dark:bg-dark pt-48 pb-12 h-[56vh] md:h-[60vh] md:pt-16'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='text-light-heading dark:text-paragraph-dark'
      >
        <Heading itemNumber='03' title='Experience' />
        <div className='w-90 m-center pt-12'>
          <ExperienceCard experience={experience} />
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
