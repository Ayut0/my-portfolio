import { motion } from 'framer-motion'
import React from 'react'
import Button from '@/components/elements/Button'
import { navbarContents } from '@/data/navMenu'

const MenuItem = () => {
  const contents = navbarContents
  return (
    <div className='flex-initial text-[#FF8906] font-bold m-5'>
      <ul className='md:flex hidden flex-initial text-left items-center'>
        {contents.map((value, index) => (
          <motion.li key={index} className='p-4 text-xl'>
                <a href={value.link}>{`0${index+1}.`} {value.name} </a>
          </motion.li>
        ))}
        <Button />
      </ul>
    </div>
  )
}

export default MenuItem
