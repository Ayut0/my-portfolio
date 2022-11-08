import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer:NextPage= () => {
    return (
      <Link href='#hero'>
            <footer className='w-full sticky cursor-pointer bottom-5'>
                <div className='flex items-center justify-end'>
                    <Image
                        src='/images/logo.png' alt='My logo' width={70} height={70}
                        className='grayscale hover:grayscale-0'
                    />

                </div>
            </footer>
      </Link>
  )
}

export default Footer