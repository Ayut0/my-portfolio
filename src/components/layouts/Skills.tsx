import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import Skill from '../elements/Skill'

// type Props = {
//   skills: Skill[];
// }

const Skills: NextPage = () => {
  return (
    <section id='skill' className='bg-dark snap-start h-screen md:h-[50vh] py-24 lg:py-0'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{once: true}}
        className='w-90 m-center pt-64 md:pt-16 lg:pt-0'
      >
        <div className='grid-cols-4 grid gap-4 lg:gap-8 justify-items-center items-center w-fit m-center'>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
