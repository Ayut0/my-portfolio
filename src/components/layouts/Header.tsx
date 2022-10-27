import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='bg-header'>
            <div>
                <Image
                    src='/images/logo.png'
                    alt='My logo'
                    width={50}
                    height={50}
                />
            </div>
            <Navbar />
        </header>
  )
}

export default Header
