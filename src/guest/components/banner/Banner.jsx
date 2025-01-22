import React from 'react'
import Styles from './Banner.module.scss'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const Banner = () => {
  return (
    <div className={Styles.container}>

      <div className={Styles.sub}>

        <div className={Styles.searchs}>
          <div className={Styles.titles}>
            <span className={Styles.title}>Beyond Happines</span>
            </div>
          <div className={Styles.search}>
            <input type='text' className={Styles.txt} placeholder='search your destination' />
            {/* <input type='submit' name='search' value='<SearchSharpIcon/>' className={Styles.btn} /> */}
            <button className={Styles.btn} ><SearchSharpIcon /></button>
          </div>
        </div>

        <div className={Styles.img}>
          <img className={Styles.image} src='https://images.emtcontent.com/holiday-img/home-img/dubai_newbb.png' />
        </div>
      </div>
    </div>



  )
}

export default Banner