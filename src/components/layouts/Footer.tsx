import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer: NextPage = () => {
  return (
    <Link href='#hero'>
      <footer className='w-[10%] left-[340px] lg:left-[1260px] sticky cursor-pointer bottom-3'>
        <div className='flex items-center justify-end'>
          <Image
            src='/images/logo.png'
            alt='My logo'
            width={55}
            height={55}
            className='grayscale hover:grayscale-0'
          />
        </div>
      </footer>
    </Link>
  )
}

export default Footer
