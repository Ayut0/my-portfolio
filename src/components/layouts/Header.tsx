import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Header: NextPage = () => {
  return (
    <header className='dark:bg-light-heading bg-light-primary flex items-center lg:h-[5.5rem] sm:h-20'>
      <nav className='flex items-center w-90 m-center justify-between'>
        <Link href='#contact'>
          <Image src='/images/logo.png' alt='My logo' width={70} height={70} />
        </Link>
        <Navbar />
      </nav>
    </header>
  )
}

export default Header
