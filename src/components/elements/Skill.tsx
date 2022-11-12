import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from 'sanity'
import { Skill } from 'typings'

type Props = {
  skill: Skill;
  directionLeft?: boolean;
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className='group flex cursor-pointer relative'>
      <motion.div
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          src={urlFor(skill?.image).url()}
          alt={skill.title}
          width={60}
          height={60}
          className='bg-[#fffffe] rounded-full object-cover w-14 h-14 group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28'
        />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-90 duration-[250] ease-in-out group-hover:bg-[#fffffe] h-14 w-14 md:w-28 md:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl font-bold text-black'>{skill.title}</p>
        </div>
      </div>
    </div>
  )
}
export default Skill
