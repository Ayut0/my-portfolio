import { motion } from 'framer-motion'
import React from 'react'
import { liVariants } from './MobileMenu'

const Button = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, color: '#fff' }}
          whileTap={{ scale: 0.9 }}
          variants={liVariants}
      className=' bg-transparent outline-double outline-headline-dark font-semibold py-1.5 px-4 rounded h-fit'
      >
          <a href='../../assets/RESUME(YUTO YAMAKITA).pdf' download>RESUME</a>
    </motion.button>
  )
}

export default Button
