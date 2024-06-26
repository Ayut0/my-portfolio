import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import { SocialIcon } from 'react-social-icons'

export type Props = {
  className: string
  fgColor: string
  size: { height: number; width: number }
}

const Socials = ({ className, fgColor, size }: Props) => {
  return (
    <Fragment>
      <motion.div className={className} whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
        <SocialIcon
          url='https://github.com/Ayut0'
          bgColor='transparent'
          fgColor={fgColor}
          style={size}
          target='_blank'
        />
      </motion.div>
      <motion.div className={className} whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
        <SocialIcon
          url='https://www.linkedin.com/in/yuto-yamakita'
          bgColor='transparent'
          fgColor={fgColor}
          style={size}
          target='_blank'
        />
      </motion.div>
    </Fragment>
  )
}

export default Socials
