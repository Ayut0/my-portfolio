import { groq } from 'next-sanity'
import { apiEndpoint } from '@/const/url'
import { sanityClient } from 'sanity'
import type { WorkExperience } from 'typings'


const query = groq`
  ${process.env.NEXT_PUBLIC_FETCH_EXPERIENCE}
`

type Data = {
  workExperience: WorkExperience[]
}

export const fetchExperience = async () => {
  const experience: WorkExperience[] = await sanityClient.fetch(query)
  return experience
}


// export const fetchExperience = async () => {
//   const res = await fetch(`${apiEndpoint}/api/getExperience`)
//   const data = await res.json()
//   const experience: WorkExperience[] = data.workExperience
  
//   return experience;
// }