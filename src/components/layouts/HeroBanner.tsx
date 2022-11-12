import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import Button from '../elements/Button'
import ProfilePicture from '../elements/ProfilePicture'

const HeroBanner: NextPage = () => {
  const navigateToContact: JSX.Element = <a href='#contact'>GET IN TOUCH</a>
  return (
    <section id='hero' className='bg-dark py-12 md:flex md:justify-around md:items-center h-screen snap-start'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='text-center md:text-left'
      >
        <div className=' mb-12 '>
          <span className='text-highlight-dark font-content text-2xl lg:text-4xl'>Hello, my name is</span>
          <h1 className=' neon font-headline text-[#E3E3E1] font-bold text-5xl md:text-9xl pb-4'>
            Yuto Yamakita
          </h1>
          <div className='text-[#eeede7] font-headline text-2xl flex flex-col md:text-4xl lg:text-4xl lg:leading-[3.5rem] md:pt-5 md:gap-2'>
            <span className='neon'>Front-End Developer</span>
            <span className='neon'>Based In Vancouver</span>
          </div>
        </div>
        <div className='lg:text-2xl'>
        <Button>{navigateToContact}</Button>
        </div>
      </motion.div>
      <ProfilePicture />
    </section>
  )
}

export default HeroBanner
