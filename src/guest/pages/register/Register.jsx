import React, { useState } from 'react'
import Styles from './Register.module.scss'
import { Box } from '@mui/material'
import axios from 'axios'
const Register = () => {
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = {
        user_email: email,
        user_password: password,

      }
      const response = await axios.post('http://127.0.0.1:8000/user', data)
      console.log('User Register successful:', response.data);
      SetEmail("")
      SetPassword("")
    } catch (error) {
      console.error('Error registering:', error);
    }
  };


  return (
    <div className={Styles.regform}>
      <div className={Styles.form}>

        <div className={Styles.part1}>
          <img src='https://img.freepik.com/free-vector/winter-landscape-with-frozen-lake-clouds_107791-1861.jpg?t=st=1737525122~exp=1737528722~hmac=ab3b886f53bfc5eea45fc623657b7a0f5e1023951383c1faeb88f695717d83d5&w=1380' className={Styles.bg} />
          <img src='https://images.emtcontent.com/nwhomfiles/freebooking.png' className={Styles.img} />
        </div>

        <div className={Styles.part2}>
          <div className={Styles.close}></div>

          <div className={Styles.titles}>
            <span className={Styles.title}>Create Account</span>

          </div>
          <Box component={'form'} onSubmit={handleSubmit} className={Styles.fields}>
            <div className={Styles.field}>
              <input type='email' name='txtemail' id='txtemail' placeholder='enter email' className={Styles.email} value={email} onChange={(e) => SetEmail(e.target.value)} />
              <input type='password' name='txtpassword' id='txtpassword' placeholder='enter password' className={Styles.password} value={password} onChange={(e) => SetPassword(e.target.value)} />

            </div>
            <div className={Styles.btn}>
              <input type='submit' name='registerbtn' id='registerbtn' value='Save'
                className={Styles.submit} />
            </div>
          </Box>
          <div className={Styles.policy}>
            <span className={Styles.policys}>By logging in,</span>
            <span className={Styles.policys}>I understand & agree to EaseMyTrip terms of use and privacy policy</span>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Register