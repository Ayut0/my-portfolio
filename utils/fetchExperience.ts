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

// import { WorkExperience } from "typings";

// export const fetchExperience = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
//   const data = await res.json()
//   console.log(data);
//   const experience: WorkExperience[] = data.workExperience
  
//   return experience;
// }