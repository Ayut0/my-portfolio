import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Button from '@/components/elements/Button'
import { navbarContents } from '@/data/navMenu'

const MenuItem: NextPage = () => {
  const contents = navbarContents
  const link:JSX.Element =
    (
      <a href='/assets/RESUME(YUTO YAMAKITA).pdf' download>
        RESUME
      </a>
    )
  return (
    <div className=' flex-initial text-[#FF8906] font-bold m-5'>
      <ul className='md:flex hidden flex-initial text-left items-center'>
        {contents.map((value, index) => (
          <motion.li key={index} className='p-4 text-xl'>
            <Link href={value.link}>
              {`0${index + 1}.`} {value.name}{' '}
            </Link>
          </motion.li>
        ))}
        <Button>{link}</Button>
      </ul>
    </div>
  )
}

export default MenuItem
