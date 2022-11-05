import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React, { Fragment } from 'react'
import Button from '../elements/Button'
import ProfilePicture from '../elements/ProfilePicture'

const HeroBanner: NextPage = () => {
  const navigateToContact: JSX.Element = <a href='#contact'>Get in touch</a>
  return (
    <section id='hero' className='bg-dark py-12 md:flex md:justify-around md:items-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='text-center md:text-left'
      >
        <div className=' mb-12 '>
          <span className='text-highlight-dark font-content text-2xl'>Hello, my name is</span>
          <h1 className=' neon font-headline text-[#E3E3E1] font-bold text-6xl md:text-8xl'>
            Yuto Yamakita
          </h1>
          <div className='text-[#0F0E17] font-bold text-3xl flex flex-col md:text-4xl md:pt-5 md:gap-2'>
            <span className='neon'>Front-End Developer</span>
            <span className='neon'>Based In Vancouver</span>
          </div>
        </div>
        <Button>{navigateToContact}</Button>
      </motion.div>
      <ProfilePicture />
    </section>
  )
}

export default HeroBanner
