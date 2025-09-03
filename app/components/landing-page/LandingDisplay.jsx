import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Roadmap from './Roadmap'
import AboutUs from './About'
import Question from './Question'
import Join from './Join'
import Footer from './Footer'

const LandingDisplay = () => {
  return (
    <>
        <Banner />
        <Roadmap />
        <AboutUs />
        <Question />
        <Join />
        <hr className='mt-36 text-black/20' />
        <Footer />
    </>
  )
}

export default LandingDisplay