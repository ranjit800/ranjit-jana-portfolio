import About from '@/components/HomeComponents/AboutMe'
import GetInTouch from '@/components/HomeComponents/GetInTouch'
import HeroHome from '@/components/HomeComponents/HeroHome'
import MyEducation from '@/components/HomeComponents/MyEducation'
import Projects from '@/components/HomeComponents/Projects'
import ShortBio from '@/components/HomeComponents/ShortBio '
import TechStack from '@/components/HomeComponents/TechStack'
import React from 'react'

const page = () => {
  return (
    <>
    <HeroHome/>
    <About/>
    <ShortBio/>
    <TechStack/>
   
    <Projects/>
    <MyEducation/>
    <GetInTouch/>
    </>
  )
}

export default page
