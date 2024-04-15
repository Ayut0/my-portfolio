import React from 'react'

type Props = {
  content: string[]
}

const Description = ({ content }: Props) => {
  return (
    <article className='m-center w-90 font-content text-light-heading dark:text-paragraph-dark text-lg flex flex-col gap-4 md:gap-8 md:leading-tight md:text-3xl'>
      {content.map((element, index) => (
        <span key={index}>{element}</span>
      ))}
    </article>
  )
}

export default Description
