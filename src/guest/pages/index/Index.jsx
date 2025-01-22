import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Widget from '../../components/widget/Widget'
import Banner from '../../components/banner/banner'
import Styles from './Index.module.scss'



const Index = () => {
  return (
    <div className={Styles.index}>
    <div className={Styles.navbar}>  <Navbar/></div>
    <Banner/>
    <Widget/>
    <Footer/>

    </div>
  )
}

export default Index