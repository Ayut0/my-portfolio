import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'
import Socials from '../elements/Socials'
import Button from '@/components/elements/Button'
import { navbarContents } from '@/data/navMenu'

const MenuItem: NextPage = () => {
  const contents = navbarContents
  const link: JSX.Element = (
    <a href='/assets/RESUME(YUTO YAMAKITA).pdf' download>
      RESUME
    </a>
  )

  const { theme, setTheme } = useTheme()
  const themeChanger = () => {
    return (
      <motion.button
        whileHover={{ scale: 1.2, color: '#FF8906', backgroundColor: '' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='w-10 h-10'
      >
        {theme === 'dark' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8 dark:text-highlight-dark hover:text-light-heading'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
            />
          </svg>
        )}
      </motion.button>
    )
  }

  return (
    <div className=' flex-initial text-light-heading dark:text-[#FF8906] font-bold m-5 md:w-[70%]'>
      <ul className='md:flex md:justify-around hidden flex-initial text-left items-center'>
        {contents.map((value, index) => (
          <motion.li
            key={index}
            className='p-4 text-xl'
            whileHover={{scale: 1.2}}
            transition={{duration: 1.2}}
          >
            <Link href={value.link}>
              {`0${index + 1}.`} {value.name}{' '}
            </Link>
          </motion.li>
        ))}
        <Button>{link}</Button>
        <Socials
          className='text-light-boldText dark:text-icon-dark'
          fgColor={theme === 'dark' ? '#A8B2D1' : '#2E2F3E'}
          size={{
            height: 45,
            width: 45,
          }}
        />
        {themeChanger()}
      </ul>
    </div>
  )
}

export default MenuItem
