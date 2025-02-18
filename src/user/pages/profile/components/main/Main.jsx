import React, { useState } from 'react';
import Styles from './Main.module.scss';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box, IconButton, styled } from '@mui/material';
import axios from 'axios';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const Main = () => {
const [photo, setPhoto] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("photo", photo);
    const response = await axios.post('http://127.0.0.1:8000/fileUp', data)
    console.log(' added successful:', response.data);

  }

  return (
    <div className={Styles.main}>

      <Box component={'form'} className={Styles.sub} onSubmit={handleSubmit}>
        <div className={Styles.title}>General Details</div>

        <div className={Styles.name}>

          <div className={Styles.firstname}>
            <span className={Styles.fnamelabel}>First Name</span>
            <input type="text" className={Styles.fnametxt} />
          </div>
          <div className={Styles.lastname}>
            <span className={Styles.snamelabel}>Last Name</span>
            <input type="text" className={Styles.snametxt} />
          </div>
        </div>

        <div className={Styles.email}>
          <span className={Styles.emaillabel}>Email</span>
          <input type="email" className={Styles.emailtxt} />
        </div>

        <div className={Styles.phone}>
          <span className={Styles.phonelabel}>Phone Number</span>
          <input type="tel" className={Styles.phonetxt} />
        </div>



        <div className={Styles.address}>
          <span className={Styles.addresslabel}>Address</span>
          <textarea className={Styles.addresstxt} rows="3"></textarea>
        </div>
        <div className={Styles.location}>
          <div className={Styles.state}>
            <span className={Styles.statelabel} >State</span>
            <select className={Styles.statetxt}>
              <option value="select">select</option>
            </select>

          </div>
          <div className={Styles.district}>
            <span className={Styles.districtlabel}>District</span>
            <select className={Styles.districttxt}>
              <option value="select">select</option>
            </select>

          </div>
          <div className={Styles.place}>
            <span className={Styles.placelabel}>Place</span>
            <select className={Styles.placetxt}>
              <option value="select">select</option>
            </select>

          </div>
        </div>
        <div className={Styles.update}>
          <button className={Styles.updatebtn}>Update</button>
        </div>



        <div className={Styles.images}>
          <div className={Styles.profile}>
            <span className={Styles.photolabel}>Photo</span>
            <label className={Styles.photolabel1}>
              <IconButton
                component="label"
                role={undefined}

              >
                < UploadFileIcon />
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => setPhoto(event.target.files[0])}
                  
                />
              </IconButton>
              {/* <span className={Styles.photoicon}><UploadFileIcon/>Choose Photo</span>
          <input type='file' className={Styles.file}/> */}
            </label>
          </div>
          <div className={Styles.proof}>

            <span className={Styles.prooflabel}>ID Proof</span>
            <label className={Styles.prooflabel1}>
              <span className={Styles.prooficon}><UploadFileIcon />Choose ID Proof</span>
              <input type='file' className={Styles.file} />
            </label>
          </div>
          <div className={Styles.update}>
            <button className={Styles.updatebtn}>Update</button>
          </div>
        </div>

        <div className={Styles.password}>
          <span className={Styles.title}>Change Password</span>
          <div className={Styles.currentpassword}>
            <span className={Styles.currentpswdlbel} >Current Password</span>

            <input type='password' className={Styles.currentpswd} />
          </div>
          <div className={Styles.newpassword}>
            <span className={Styles.newpswdlbel} >New Password</span>
            <input type='password' className={Styles.newpswd} />


          </div>
          <div className={Styles.update}>
            <button type='submit' className={Styles.updatebtn}>Update</button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Main;
