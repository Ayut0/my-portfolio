import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import Button from '../elements/Button'
import Description from '../elements/Description'
import Heading from '../elements/Heading'
import TypeWriter from '../elements/TypeWriter'
import { content } from '@/data/aboutMeContents'

const AboutMe: NextPage = () => {
  const aboutMeContent: string[] = content
  const link: JSX.Element = (
    <a href='/assets/RESUME(YUTO YAMAKITA).pdf' download>
      RESUME
    </a>
  )
  return (
    <section id='about' className='bg-dark py-12 h-screen snap-start'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Heading itemNumber='01' title='About me' />
        <TypeWriter />
        <Description content={aboutMeContent} />
        <div className='py-10 text-center md:w-30 md:text-2xl'>
          <Button>{link}</Button>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe
