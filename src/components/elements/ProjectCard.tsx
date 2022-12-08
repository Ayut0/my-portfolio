import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { urlFor } from 'sanity'
import { Project } from 'typings'

type Props = {
  projects: Project[]
}

const ProjectCard = ({ projects }: Props) => {
  return (
    <div className='h-[64vh] lg:h-[88vh] w-90 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory items-center m-center z-20 md:pb-8 lg:pt-12 lg:pb-2 scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#FF8906]/50'>
      {projects.map((project, i) => (
        <div
          key={i}
          className='w-screen lg:h-[85vh] shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-8 md:p-44'
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
          <div className='px-0 md:px-10 max-w-6xl'>
            <h4 className='text-xl lg:text-4xl lg:mb-4 font-semibold text-light-heading dark:text-headline-dark'>
              {project.title}
            </h4>
            <div className='flex items-center space-x-2 mb-6 lg:mb-10'>
              {project?.technologies.map((technology) => (
                <Image
                  key={technology._id}
                  src={urlFor(technology.image).url()}
                  alt={technology.title}
                  height={35}
                  width={35}
                />
              ))}
            </div>
            <span className='text-light-heading dark:text-paragraph-dark lg:text-3xl lg:block lg:mb-8'>
              {project.summary}
            </span>
            <div className='flex items-center space-x-2 justify-around w-90 lg:m-center mt-8 lg:w-full lg:justify-end lg:gap-8'>
              <div className='lg:text-2xl'>
                <Button>
                  {
                    <Link key={project._id} href={project.linkToDemo}>
                      SEE DEMO
                    </Link>
                  }
                </Button>
              </div>
              <div className='lg:text-2xl'>
                <Button>
                  {
                    <Link key={project._id} href={project.linkToGit}>
                      GITHUB
                    </Link>
                  }
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
