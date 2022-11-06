import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import Skill from '../elements/Skill'

// type Props = {
//   skills: Skill[];
// }

const Skills: NextPage = () => {
  return (
    <section className='bg-dark py-12 h-screen'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='w-90 m-center'
      >
        <h3>Skills</h3>
        <div className='grid-cols-4 grid gap-4 justify-items-center items-center'>
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
