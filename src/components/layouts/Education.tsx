import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import Heading from '../elements/Heading'

const Education: NextPage = () => {
  return (
    <section className='bg-dark pb-12 h-[65vh] md:pt-16'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='text-paragraph-dark'
      >
        <Heading itemNumber='03' title='Education' />
        <div className='w-90 m-center pt-12'>
          <h3 className='font-headline font-bold text-3xl md:text-5xl'>
            Cornerstone International Community College of Canada
          </h3>
          <div className='font-content flex flex-col pb-4 md:text-3xl'>
            <span>Jan 2022 - Dec 2022</span>
            <span>Vancouver, Canada</span>
          </div>
          <div className='font-content flex flex-col pb-4 gap-5 md:py-8'>
            <span className='font-headline font-semibold text-2xl xl:text-4xl'>
              Web & Mobile App Development Diploma
            </span>
            <span className='font-content text-2xl'>I also have a bachelor of a mechatronics</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education