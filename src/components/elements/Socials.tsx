import { DocumentTextIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
  class: string
}

const Socials: React.FC = () => {
  return (
    <div className='flex justify-between items-center m-center w-[65%] lg:w-1/4 lg:h-32'>
      <div className='social-icon lg:flex lg:items-end lg:justify-center'>
                  <a href='/assets/RESUME(YUTO YAMAKITA).pdf' download>
        <DocumentTextIcon className='h-7 w-7 lg:h-9 lg:w-9 text-[#A8B2D1]'>
        </DocumentTextIcon>
          </a>
      </div>
      <div className='social-icon'>
        <SocialIcon
          url='https://github.com/Ayut0'
          bgColor='transparent'
          fgColor='#A8B2D1'
          style={{ height: 75, width: 75 }}
        />
      </div>
      <div className='social-icon'>
        <SocialIcon
          url='https://www.linkedin.com/in/yutoyama/'
          bgColor='transparent'
          fgColor='#A8B2D1'
          style={{ height: 75, width: 75 }}
        />
      </div>
      <div className='social-icon'>
        <SocialIcon
          url='https://www.instagram.com/i_am_3yut0/?hl=ja'
          bgColor='transparent'
          fgColor='#A8B2D1'
          style={{ height: 75, width: 75 }}
        />
      </div>
    </div>
  )
}

export default Socials
