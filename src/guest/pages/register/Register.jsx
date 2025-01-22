import React from 'react'
import Styles from './Register.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className={Styles.regform}>
    <div className={Styles.form}>

         <div className={Styles.part1}>
          <img src='https://img.freepik.com/free-vector/winter-landscape-with-frozen-lake-clouds_107791-1861.jpg?t=st=1737525122~exp=1737528722~hmac=ab3b886f53bfc5eea45fc623657b7a0f5e1023951383c1faeb88f695717d83d5&w=1380' className={Styles.bg}/>
        <img src='https://images.emtcontent.com/nwhomfiles/freebooking.png' className={Styles.img}/>
      </div>

      <div className={Styles.part2}>
      <div className={Styles.close}><CloseIcon/></div>

      <div className={Styles.titles}>
        <span className={Styles.title}>Create Account</span>

      </div>
      <div className={Styles.fields}>
        <div className={Styles.field}>
          <input type='email' name='email' id='email' placeholder='enter email' className={Styles.email}/>
          <input type='password' name='password' id='password' placeholder='enter password' className={Styles.password}/>

        </div>
      </div>
      <div className={Styles.btn}>
        <input type='submit' name='register' id='register' value='Save'
         className={Styles.submit}/>
      </div>
      <div className={Styles.policy}>
        <span className={Styles.policys}><Link to={'/login'}>Login here </Link>/By logging in,</span>
        <span className={Styles.policys}>I understand & agree to EaseMyTrip terms of use and privacy policy</span>
      </div>
    </div>
      </div>
    </div>

   
  )
}

export default Register