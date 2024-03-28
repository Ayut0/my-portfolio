import { motion } from 'framer-motion'
import React from 'react'
import SkillIcon from '../elements/Skill'
import type { Skill as SkillType } from 'typings'

type Props = {
  skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
  return (
    <section
      id='skill'
      className='bg-light-secondary dark:bg-dark h-[90h] md:h-[80vh] lg:pb-4'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='w-90 m-center md:pt-16 lg:pt-0'
      >
        <div className='grid-cols-4 grid gap-5 lg:gap-12 lg:gap-x-40 justify-items-center items-center w-fit m-center'>
          {skills?.map((skill) => (
            <SkillIcon key={skill._id} skill={skill} />
          ))}
        </div>
      </motion.div>
      <div className='w-90 m-center text-center mt-[24px] lg:pb-[32px]'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className='text-[16px] lg:text-[24px]'
        >
          And leaning more!!<br></br>Nothing can stop me
        </motion.span>
      </div>
    </section>
  )
}

export default Skills
