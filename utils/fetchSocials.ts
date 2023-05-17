// import { Social } from 'typings'

// export const fetchSocials = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
//   const data = await res.json()
//   const socials: Social[] = data.socials

//   return socials
// }

// import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from 'sanity'
import type { Social } from 'typings'

const query = groq`
${process.env.NEXT_PUBLIC_FETCH_SOCIALS}
`

type Data = {
  socials: Social[]
}

export const fetchSocials = async () => {
  const socials: Social[] = await sanityClient.fetch(query)
  // res.status(200).json({ socials })
  return socials
}
