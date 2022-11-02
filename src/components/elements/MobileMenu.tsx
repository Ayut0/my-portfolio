import { motion, Variants } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import Button from './Button'
import { navbarContents } from '@/data/navMenu'

const ulVariants:Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const liVariants:Variants = {
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

const MobileMenu: NextPage = () => {
  const contents = navbarContents
  const link:JSX.Element =
    (
      <a href='/assets/RESUME(YUTO YAMAKITA).pdf' download>
        RESUME
      </a>
    )
  return (
    <motion.ul variants={ulVariants} className='stroke-menu mt-20 ml-12'>
      {contents.map((value, index) => (
        <motion.li
          key={index}
          variants={liVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className='p-4 text-xl font-bold text-[#0F0E17]'
        >
          <a href={value.link}>
            {`0${index + 1}.`} {value.name}{' '}
          </a>
        </motion.li>
      ))}
         <Button>{link}</Button>
    </motion.ul>
  )
}

export default MobileMenu
