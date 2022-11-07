import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:yuvto.0420@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`
  }

  return (
    <section id='contact' className='bg-dark h-screen snap-start lg:pt-12'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <span className='text-highlight-dark text-xl md:text-4xl'>04. What&#39;s Next?</span>
        <h2 className='heading-stroke font-headline text-headline-dark font-bold text-[2.5rem] md:text-5xl pt-8'>
          Get in touch
        </h2>
        <div className='font-content text-headline-dark flex flex-col pb-10 text-xl md:text-3xl lg:pt-4'>
          <span>My passion is here!!</span>
          <span>I would love to hear from you.</span>
        </div>
        <div className='flex justify-evenly w-[65%] items-center text-center m-center pb-8 lg:w-1/4'>
          <EnvelopeIcon className='h-7 w-7 text-highlight-dark animate-pulse lg:h-9 lg:w-9' />
          <span className='text-2xl text-headline-dark font-semibold font-headline lg:text-4xl'>
            yuvto.0420@gmail.com
          </span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit m-center pt-5 pb-9 lg:w-1/3'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              type='text'
              className='contact-form-input lg:w-1/2'
            />
            <input
              {...register('email')}
              placeholder='Email'
              type='email'
              className='contact-form-input lg:w-1/2'
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            type='text'
            className='contact-form-input'
          />
          <textarea {...register('message')} placeholder='message' className='contact-form-input pb-16 lg:pb-24' />
          <motion.button
            type='submit'
            className=' bg-transparent outline-double border-2 border-black outline-highlight-dark font-semibold py-2 px-4 rounded h-fit text-highlight-dark'
            whileHover={{ scale: 1.1, color: '#0F0E17', backgroundColor: '#FF8906' }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact
