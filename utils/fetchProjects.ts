// import { Project } from 'typings'
import { groq } from 'next-sanity'
import { apiEndpoint } from '@/const/url'
import { sanityClient } from 'sanity'
import type { Project } from 'typings'

export const fetchProjects = async () => {
  const res = await fetch(`${apiEndpoint}/api/getProjects`)
  const data = await res.json()
  const projects: Project[] = data.projects

  return projects
}


// const query = groq`
//   ${process.env.NEXT_PUBLIC_FETCH_PROJECTS}
// `

// type Data = {
//   projects: Project[]
// }

// export const fetchProjects = async () => {
//   const projects: Project[] = await sanityClient.fetch(query)
//   return projects
// }
