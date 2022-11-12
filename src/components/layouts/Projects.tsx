import { motion } from 'framer-motion'
import React from 'react'
import Heading from '../elements/Heading'
import ProjectCard from '../elements/ProjectCard'
import { Project } from 'typings'

type Props = {
  projects: Project[]
}

const Project = ({projects}: Props) => {
  return (
    <section id='project' className='bg-dark py-24 lg:py-0 md:pt-12 lg:pt-8 h-screen snap-start'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{once: true}}
        className='z-0 relative h-screen max-w-full'
      >
        <Heading itemNumber='02' title='Project' />
        <ProjectCard projects={projects}/>
        <div className='w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />
      </motion.div>
    </section>
  )
}

export default Project
