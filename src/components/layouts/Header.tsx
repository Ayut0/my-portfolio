import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Header:NextPage = () => {
    return (
        <header className='bg-header flex items-center h-20 sm:h-24'>
            <nav className='flex items-center w-90 m-center justify-between'>
                <div>
                    <Image
                        src='/images/logo.png'
                        alt='My logo'
                        width={70}
                        height={70}
                    />
                </div>
                <Navbar />
            </nav>
        </header>
  )
}

export default Header
