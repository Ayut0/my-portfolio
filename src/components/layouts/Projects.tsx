import { motion } from 'framer-motion'
import React from 'react'
import Heading from '../elements/Heading'
import ProjectCard from '../elements/ProjectCard'
import { Project } from 'typings'

type Props = {
  projects: Project[]
}

const Project = ({ projects }: Props) => {
  return (
    <section
      id='project'
      className='bg-light-secondary dark:bg-dark py-24 lg:py-0 md:pt-8 lg:pt-4 h-[72vh] md:h-screen'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='z-0 relative max-w-full'
      >
        <Heading itemNumber='02' title='Project' />
        <ProjectCard projects={projects} />
        <div className='w-full absolute top-[10%] lg:top-[10%] bg-[#F7AB0A]/10 left-0 h-[280px] lg:h-[424px] -skew-y-12' />
      </motion.div>
    </section>
  )
}

export default Project
