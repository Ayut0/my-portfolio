import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2021-10-21' || '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
}

//Set up the client for fetching data in the getProps function
export const sanityClient = createClient(config)

export const urlFor = (source: any) => {
  return createImageUrlBuilder(config).image(source)
}
