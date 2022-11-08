import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { projects } from '@/data/project'

const ProjectCard: NextPage = () => {
  return (
    <div className='w-90 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory items-center m-center z-20 pb-8 lg:pb-0 scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#FF8906]/50'>
      {projects.map((project, i) => (
        <div
          key={i}
          className='w-screen h-[80vh] shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'
        >
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image src={project.image} alt={project.description} height={100} width={200} />
          </motion.div>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-xl lg:text-4xl lg:mb-4 font-semibold text-paragraph-dark'>{project.name}</h4>
            <span className='text-paragraph-dark lg:text-3xl'>{project.description}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
