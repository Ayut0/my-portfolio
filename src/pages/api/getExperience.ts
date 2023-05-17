import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from 'sanity'
import type { WorkExperience } from 'typings'

const query = groq`
*[_type == "workExperience"]{
  ...,
  technologies[]->
} | order(priority desc)
`

type Data = {
  workExperience: WorkExperience[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const workExperience: WorkExperience[] = await sanityClient.fetch(query)

  res.status(200).json({ workExperience })
}
