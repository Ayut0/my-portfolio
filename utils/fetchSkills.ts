// import { Skill } from 'typings'

// export const fetchSkills = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
//   const data = await res.json()
//   const skills: Skill[] = data.skills

//   return skills
// }

import { groq } from 'next-sanity'
import { sanityClient } from 'sanity'
import type { Skill } from 'typings'

const query = groq`
${process.env.NEXT_PUBLIC_FETCH_SKILLS}
`

type Data = {
  skills: Skill[]
}

export const fetchSkills = async () => {
  const skills: Skill[] = await sanityClient.fetch(query)
  return skills
}
