import { motion } from 'framer-motion'
import React from 'react'
import Skill from '../elements/Skill'
import { Skill as SkillType } from 'typings'

type Props = {
  skills: SkillType[];
}

const Skills = ({ skills }:Props) => {
  return (
    <section id='skill' className='bg-light-secondary dark:bg-dark snap-start h-screen md:h-[80vh] py-24 lg:pb-4 lg:pt-[32px]'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{once: true}}
        className='w-90 m-center pt-64 md:pt-16 lg:pt-0'
      >
        <div className='grid-cols-4 grid gap-5 lg:gap-12 lg:gap-x-40 justify-items-center items-center w-fit m-center'>
          {skills?.map(skill => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
      </motion.div>
      <div className='w-90 m-center text-center'>
        <span className='lg:text-[24px]'>And leaning more!!<br></br>It never stops...</span>
      </div>
    </section>
  )
}

export default Skills
