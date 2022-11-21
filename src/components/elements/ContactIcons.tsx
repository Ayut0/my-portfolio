import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import React from 'react'
import Socials, { Props as SocialType } from './Socials'

const ContactIcons = () => {
  const { theme, systemTheme } = useTheme()
  console.log(theme, 'icon' ,systemTheme);
  return (
    <div className='flex justify-between items-center m-center w-[75%] lg:w-1/4 lg:h-32'>
      <div className='social-icon lg:flex lg:items-center lg:justify-center'>
        <a href='/assets/RESUME(YUTO YAMAKITA).pdf' download>
          <DocumentTextIcon className='h-10 w-[75px] lg:h-9 lg:w-9 text-[#2E2F3E] dark:text-[#A8B2D1]'></DocumentTextIcon>
        </a>
      </div>
      <Socials
        className='social-icon'
        fgColor={theme === 'dark' ? '#A8B2D1' : '#2E2F3E'}
        size={{
          height: 75,
          width: 75,
        }}
      />
    </div>
  )
}

export default ContactIcons
