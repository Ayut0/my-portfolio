import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

type Props = {
  directionLeft?: boolean
}

const Skill: NextPage = ({ directionLeft }: Props) => {
  return (
    <div className='group flex'>
      <motion.div
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className='cursor-pointer'
      >
        <Image
          src='/images/logo.png'
          alt='My logo'
          width={60}
          height={60}
          className='rounded-full border border-gray-500 object-cover w-12 h-12 group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28'
        />
      </motion.div>
    </div>
  )
}
export default Skill
