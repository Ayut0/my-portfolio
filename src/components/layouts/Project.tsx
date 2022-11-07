import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import Heading from '../elements/Heading'
import ProjectCard from '../elements/ProjectCard'

const Project: NextPage = () => {
  return (
    <section className='bg-dark pt-12 h-screen'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{once: true}}
        className='z-0 relative h-screen max-w-full'
      >
        <Heading itemNumber='02' title='Project' />
        <ProjectCard />
        <div className='w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />
      </motion.div>
    </section>
  )
}

export default Project
