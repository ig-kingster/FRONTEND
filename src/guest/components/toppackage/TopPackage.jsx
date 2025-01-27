import React from 'react'
import Styles from './TopPackage.module.scss'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

const TopPackage = () => {

const packages = [
{
    id: 1,
    name: 'Kashmir',
    image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',

    price: '$100',
  },
  {
    id: 2,
    name: 'Goa',
    image: 'https://images.emtcontent.com/holiday-img/home-img/goa-handpckd.webp',

    price: '$200',
  },
  {
    id: 3,
    name: 'Manali',
    image: 'https://images.emtcontent.com/holiday-img/home-img/himachal-handpckd.webp',

    price: '$300',
  },
  {
    id: 4,
    name: 'Leh-Ladakh',
    image: 'https://images.emtcontent.com/holiday-img/home-img/north-east-handpckd.webp',

    price: '$400',
  },
  {
    id: 5,
    name: 'Kerala',
    image: 'https://images.emtcontent.com/holiday-img/home-img/kerala-handpckd.webp',

    price: '$500',
  },
  {
    id: 6,
    name: 'Rajasthan',
    image: 'https://images.emtcontent.com/holiday-img/home-img/rajesthan-handpckd.webp',

    price: '$600',
  },
  {
    id: 7,
    name: 'Andaman',
    image: 'https://images.emtcontent.com/holiday-img/home-img/andaman-handpckd.webp',

    price: '$700',
  },
  {
    id: 8,
    name: 'Gujarat',
    image: 'https://images.emtcontent.com/holiday-img/home-img/gujarat-handpckd.webp',

    price: '$800',
  },
  

]

  return (
    <div className={Styles.container}>
      <div className={Styles.sub}>
<div className={Styles.heads}>
             <span className={Styles.head}>Top </span>
             <span> Packages</span>
           </div>
      <div className={Styles.layout}>
       {packages.map((pkg) => (
      <div  key={pkg.id} className={Styles.package}>
        <div className={Styles.packageimage}>
          <img src={pkg.image} alt="" className={Styles.img} />
        </div>
        <div className={Styles.packageinfo}>


          <div className={Styles.packagename}>
            <span>{pkg.name}</span>
          </div>
          <div className={Styles.pkginfo}>

    
          <div className={Styles.packageprice}>
            <span>Price:{pkg.price}</span>
          </div>
          <div className={Styles.explore}>
           <div className={Styles.exploretxt}><span >explore</span></div> 
            <div className={Styles.exploreicon}><Link to={'./login'}><EastIcon /></Link></div>
          </div>
          </div>
        </div>
      </div>
          ))}
          </div>
          </div>
    </div>
  )
}

export default TopPackage