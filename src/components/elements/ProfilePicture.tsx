import { motion } from 'framer-motion'
import { NextPage } from 'next'
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
      <motion.div className='profile-circle rounded-full p-2' initial={{scale:0}} animate={{scale: 1}} transition={{duration: 2.5}}>
      <Image
        src='/images/profile-min.jpeg'
        alt='My profile picture'
        width={300}
        height={300}
        className='rounded-full object-cover h-96 w-96 border-10 border-[#E3E3E1] border-solid'
        />
        </motion.div>
    </motion.div>
  )
}

export default ProfilePicture
