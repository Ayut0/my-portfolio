import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { liVariants } from './MobileMenu'

type Props = {
  children: ReactNode
} & React.ComponentProps<'a'>

const Button: React.FC<Props> = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, color: '#0F0E17', backgroundColor: '#FF8906' }}
      whileTap={{ scale: 0.9 }}
      variants={liVariants}
      className=' bg-transparent outline-double border-2 border-black outline-highlight-dark font-semibold py-1.5 px-4 rounded h-fit text-highlight-dark'
    >
      {children}
    </motion.button>
  )
}

export default Button
