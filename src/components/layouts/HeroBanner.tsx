import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import React from 'react'
import Button from '../elements/Button'
import ProfilePicture from '../elements/ProfilePicture'

const HeroBanner: NextPage = () => {
  const { theme } = useTheme();
  const navigateToContact: JSX.Element = <a href='#contact'>GET IN TOUCH</a>
  return (
    <section id='hero' className='bg-light-primary dark:bg-dark py-12 md:flex md:justify-around md:items-center h-screen'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='text-center md:text-left'
      >
        <div className=' mb-12 '>
          <span className='text-highlight-dark font-content text-2xl lg:text-4xl'>Hello, my name is</span>
          <h1 className={`font-headline text-light-heading dark:text-[#E3E3E1] font-bold text-5xl md:text-9xl pb-4 ${theme === 'dark'? 'neon': 'light-heading-stroke'}`}>
           Yuto Yamakita
          </h1>
          <div className='text-secondary dark:text-[#eeede7] font-headline text-2xl flex flex-col md:text-4xl lg:text-4xl lg:leading-[3.5rem] md:pt-5 md:gap-2'>
            <span className={`${theme === 'dark'? 'neon': 'light-heading-stroke'}`}>Front-End Developer</span>
            <span className={`${theme === 'dark'? 'neon': 'light-heading-stroke'}`}>Based In Vancouver</span>
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
