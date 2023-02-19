import { groq } from 'next-sanity'
import { sanityClient } from 'sanity'
import { WorkExperience } from 'typings'

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
