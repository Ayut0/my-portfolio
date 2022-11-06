import React from 'react'

type Props = {
    content: string[]
}

const Description = ({ content } :Props) => {
  return (
      <article className='m-center w-90 font-content text-paragraph-dark text-xl flex flex-col gap-4 md:gap-8 md:leading-tight md:text-3xl'>
          <span>{ content[0] }</span>
          <span>{ content[1] }</span>
          <span>{ content[2] }</span>
      </article>
  )
}

export default Description