import React from 'react'
import Header2 from './Component/Header2'
import "./secondHome.css"
import Herosection from './Component/Herosection'
import MidddleSection from './Component/MidddleSection'
import Footer2 from './Component/Footer2'
import LatestProposal from './Component/latestProposal'

const Home2 = () => {
  return (
    <>
    <div className='secondHome'>
      
      <Header2/>
      <Herosection/>
      
  </div>
  <div className='second_section'>
    <MidddleSection/>
    <LatestProposal/>
    
  </div>
  <Footer2/>
    </>
    
   
  )
}

export default Home2