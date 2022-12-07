import type { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { Fragment, useEffect, useState } from 'react'
import AboutMe from '@/components/layouts/AboutMe'
import Contact from '@/components/layouts/Contact'
import Education from '@/components/layouts/Education'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import HeroBanner from '@/components/layouts/HeroBanner'
import Projects from '@/components/layouts/Projects'
import Skills from '@/components/layouts/Skills'
import { Project, Skill, Social } from 'typings'
import { fetchProjects } from 'utils/fetchProjects'

import { fetchSkills } from 'utils/fetchSkills'
import { fetchSocials } from 'utils/fetchSocials'

type Props = {
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Homepage = ({ skills, projects, socials }: Props) => {
  //To make sure I only render UI when the page is mounted on the client.
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Fragment>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='shortcut icon' href='/favicon.ico'/>
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <title>Yuto Yamakita - Portfolio v2.0 -</title>
        <meta
          name='description'
          content='Yuto Yamakita. My Portfolio website. Front-end developer based in Vancouver, Canada.'
        />
      </Head>

      <Header />
      <div className='bg-light-primary dark:bg-dark h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#FF8906]/50'>
        <HeroBanner />
        <AboutMe />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Education />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  )
}

export default Homepage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      skills,
      projects,
      socials,
    },
    //Next.js will attempt to re-generate the page
    //When a request comes in at most once every 10 seconds

    revalidate: 10,
  }
}
