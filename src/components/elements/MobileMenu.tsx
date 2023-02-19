import { motion, Variants } from 'framer-motion'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { Fragment } from 'react'
import Button from './Button'
import Socials from './Socials'
import { navbarContents } from '@/data/navMenu'

const ulVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const liVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const iconVariant: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  closed: {
    y: 500,
    opacity: 0,
  },
}

const MobileMenu: NextPage = () => {
  const contents = navbarContents
  const link: JSX.Element = (
    <a href='/assets/RESUME(YUTO YAMAKITA).pdf' download>
      RESUME
    </a>
  )
  return (
    <Fragment>
      <h2 className='text-light-heading dark:text-headline-dark text-center font-semibold font-headline text-3xl mt-12'>
        MENU
      </h2>
      <motion.ul variants={ulVariants} className='stroke-menu ml-12'>
        {contents.map((value, index) => (
          <motion.li
            key={index}
            variants={liVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='p-4 text-xl font-bold text-[#0F0E17]'
          >
            <Link href={value.link}>
              {`0${index + 1}.`} {value.name}{' '}
            </Link>
          </motion.li>
        ))}
        <div className='mt-8'>
          <Button>{link}</Button>
        </div>
      </motion.ul>
      <motion.div variants={iconVariant} className='flex justify-center mt-12'>
        <Socials
          className={''}
          fgColor={'#0F0E17'}
          size={{
            height: 50,
            width: 50,
          }}
        />
      </motion.div>
    </Fragment>
  )
}

export default MobileMenu
