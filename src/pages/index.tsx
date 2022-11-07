import type { NextPage } from 'next'
import Head from 'next/head'
import React, { Fragment } from 'react'
import AboutMe from '@/components/layouts/AboutMe'
import Contact from '@/components/layouts/Contact'
import Education from '@/components/layouts/Education'
import Header from '@/components/layouts/Header'
import HeroBanner from '@/components/layouts/HeroBanner'
import Project from '@/components/layouts/Project'
import Skills from '@/components/layouts/Skills'

const Homepage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Yuto Yamakita</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Header />
      <HeroBanner />
      <AboutMe />
      <Skills />
      <Project />
      <Education />
      <Contact />
    </Fragment>
  )
}

export default Homepage
