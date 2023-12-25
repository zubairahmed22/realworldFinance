import React from 'react'
import Availablity from './Component/availablity';
import FirstSection from './Component/firstSection';

import MainBanner from './Component/mainBanner';

import { OurRoadmap } from './Component/OurRoadmap';

export const Home = () => {
  return (
    <div>
<MainBanner/>

  <FirstSection/>
  <Availablity/>
  {/* <Team/> */}
  {/* <OurService/> */}
  <OurRoadmap/>
  {/* <Faq/> */}
    </div>
  )
}
