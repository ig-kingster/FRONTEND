import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import Styles from './Index.module.scss'
import Trendingspot from '../../components/trendingspots/Trendingspot'
import TopPackage from '../../components/toppackage/TopPackage'
import Banner from '../../components/banner/Banner'



const Index = () => {
  return (
    <div className={Styles.index}>
    <div className={Styles.navbar}>  <Navbar/></div>
    <Banner/>
    <Trendingspot/>
    <TopPackage/>
    <Footer/>

    </div>
  )
}

export default Index