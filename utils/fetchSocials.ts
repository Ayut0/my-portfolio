import { groq } from 'next-sanity'
import { apiEndpoint } from '@/const/url'
import { sanityClient } from 'sanity'
import type { Social } from 'typings'

export const fetchSocials = async () => {
  const res = await fetch(`${apiEndpoint}/api/getSocials`)
  const data = await res.json()
  const socials: Social[] = data.socials

  return socials
}

// const query = groq`
// ${process.env.NEXT_PUBLIC_FETCH_SOCIALS}
// `

// type Data = {
//   socials: Social[]
// }

// export const fetchSocials = async () => {
//   const socials: Social[] = await sanityClient.fetch(query)
//   return socials
// }
