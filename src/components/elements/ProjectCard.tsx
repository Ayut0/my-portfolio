import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from 'sanity'
import { Project } from 'typings'

type Props = {
  projects: Project[]
}

const ProjectCard = ({ projects }: Props) => {
  return (
    <div className='w-90 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory items-center m-center z-20 pb-8 lg:pb-2 scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#FF8906]/50'>
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
            <Image
              src={urlFor(project?.image).url()}
              alt={project.summary}
              height={100}
              width={200}
              className='lg:w-[40rem]'
            />
          </motion.div>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-xl lg:text-4xl lg:mb-4 font-semibold text-paragraph-dark'>
              {project.title}
            </h4>
            <div className='flex items-center space-x-2 justify-center'>
              {project?.technologies.map((technology) => (
                <Image
                  key={technology._id}
                  src={urlFor(technology.image).url()}
                  alt={technology.title}
                  height={40}
                  width={40}
                />
              ))}
            </div>
            <span className='text-paragraph-dark lg:text-3xl'>{project.summary}</span>
            <div className='flex items-center space-x-2 justify-center'>
              <Link key={project._id} href={project.linkToDemo}>SEE DEMO</Link>
              <Link key={project._id} href={project.linkToGit}>GITHUB</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
