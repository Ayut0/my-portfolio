import { motion, useCycle, Variants } from 'framer-motion'
import { NextPage } from 'next'
import React, { Fragment } from 'react'
import MenuToggle from '../elements/MenuToggle'
import MobileMenu from '../elements/MobileMenu'
import MenuItem from './MenuItem'

const sidebarVariants: Variants = {
  open: {
    clipPath: 'circle(1000px at 90% 0%)',
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: 'circle(24px at 88.1% 5%)',
    transition: {
      duration: 0.6,
    },
  },
}

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useCycle<boolean>(false, true)

  return (
    <Fragment>
      <motion.div
        className='background md:hidden'
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <MenuToggle toggle={() => setIsOpen()} />
        <MobileMenu />
      </motion.div>
      <MenuItem />
    </Fragment>
  )
}

export default Navbar
