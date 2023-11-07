import { groq } from 'next-sanity'
import { apiEndpoint } from '@/const/url'
import { sanityClient } from 'sanity'
import type { Skill } from 'typings'

export const fetchSkills = async () => {
  const res = await fetch(`${apiEndpoint}/api/getSkills`)
  const data = await res.json()
  const skills: Skill[] = data.skills

  return skills
}


// const query = groq`
// ${process.env.NEXT_PUBLIC_FETCH_SKILLS}
// `

// type Data = {
//   skills: Skill[]
// }

// export const fetchSkills = async () => {
//   const skills: Skill[] = await sanityClient.fetch(query)
//   return skills
// }
