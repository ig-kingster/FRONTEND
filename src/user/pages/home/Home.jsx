import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from './components/banner/Banner'
import TopPackage from './components/toppackage/TopPackage'
import Trendingspot from './components/trendingspots/Trendingspot'
import Footer from './components/footer/Footer'
import Styles from './Home.module.scss'
import Testimonials from './components/testimonials/Testimonials'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner/>
        <Trendingspot/>
        <TopPackage/>
        <Testimonials/>
        <Footer/>
    
    </div>
  )
}

export default Home