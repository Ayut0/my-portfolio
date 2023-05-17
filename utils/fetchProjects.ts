// import { Project } from 'typings'

// export const fetchProjects = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
//   const data = await res.json()
//   const projects: Project[] = data.projects

//   return projects
// }

import { groq } from 'next-sanity'
import { sanityClient } from 'sanity'
import type { Project } from 'typings'

const query = groq`
  ${process.env.NEXT_PUBLIC_FETCH_PROJECTS}
`

type Data = {
  projects: Project[]
}

export const fetchProjects = async () => {
  const projects: Project[] = await sanityClient.fetch(query)
  return projects
}
