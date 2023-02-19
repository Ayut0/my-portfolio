// import { Project } from 'typings'

// export const fetchProjects = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
//   const data = await res.json()
//   const projects: Project[] = data.projects

//   return projects
// }

// import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from 'sanity'
import { Project } from 'typings'

const query = groq`
  ${process.env.NEXT_PUBLIC_FETCH_PROJECTS}
`

type Data = {
  projects: Project[]
}

export const fetchProjects = async () => {
  const projects: Project[] = await sanityClient.fetch(query)
  // res.status(200).json({ projects })

  return projects
}
