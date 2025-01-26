import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from './components/banner/Banner'
import TopPackage from './components/toppackage/TopPackage'
import Trendingspot from './components/trendingspots/Trendingspot'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Trendingspot/>
        <TopPackage/>
    
    </div>
  )
}

export default Home