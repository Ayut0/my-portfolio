import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const ProfilePicture: NextPage = () => {
  return (
    <motion.div
      initial={{
        x: -300,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
      }}
      className=' flex justify-center items-center py-12'
    >
      <motion.div
        className='profile-circle rounded-full p-2'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Image
          src='/images/profile.JPG'
          alt='My profile picture'
          width={300}
          height={300}
          className='rounded-full object-cover md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem] h-80 w-80 border-10 border-[#E3E3E1] border-solid'
        />
      </motion.div>
    </motion.div>
  )
}

export default ProfilePicture
