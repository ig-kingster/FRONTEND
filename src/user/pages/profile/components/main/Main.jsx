import React, { useEffect, useState } from 'react';
import Styles from './Main.module.scss';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box, IconButton, styled, Button } from '@mui/material';
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

  const [state, setStates] = useState("");
  const [statetData, setStatedata] = useState([])
  const [districtData, setdistrictdata] = useState([])
  const [placeData, setPlacedata] = useState([])

  const [photo, setPhoto] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [district, setDistrict] = useState("")
  const [place, setPlace] = useState("")
  const [phone, setPhone] = useState("")
  const [id, setId] = useState([])
  const [cpswd, setCpswd] = useState("")
  const [npswd, setNpswd] = useState("")

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/state");
      setStatedata(response.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchDistrict = (state_id) => {
    console.log(state_id);
    axios.get(`http://127.0.0.1:8000/district/${state_id}`).then((response) => {
      console.log(response.data);
      setdistrictdata(response.data)
    });
  };

  const   fetchPlace
  = (district_id) => {
    console.log(district_id);
    axios.get(`http://127.0.0.1:8000/place/${district_id}`).then((response) => {
      console.log(response.data);
      setPlacedata(response.data)
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("photo", photo);
    data.append("name", name);
    data.append("email", email);
    data.append("address", address);
    data.append("state", state);
    data.append("district", district);
    data.append("place", place);
    data.append("phone", phone);
    data.append("id", id);
    data.append("npswd", npswd);

    const response = await axios.post('http://127.0.0.1:8000/editUser', data)
    console.log(' added successful:', response.data);

  }

  return (
    <div className={Styles.main}>
      <Box component={'form'} className={Styles.sub} onSubmit={handleSubmit}>
        <div className={Styles.title}>General Details</div>
        <div className={Styles.name}>
          <div className={Styles.firstname}>
            <span className={Styles.fnamelabel}>Name</span>
            <input type="text" name="firstName" className={Styles.fnametxt} onChange={(e) => setName(e.target.value)} />
          </div>
          {/* <div className={Styles.lastname}>
            <span className={Styles.snamelabel}>Last Name</span>
            <input type="text" name="lastName" className={Styles.snametxt} />
          </div> */}
        </div>
        <div className={Styles.email}>
          <span className={Styles.emaillabel}>Email</span>
          <input type="email" name="email" className={Styles.emailtxt} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={Styles.phone}>
          <span className={Styles.phonelabel}>Phone Number</span>
          <input type="tel" name="phone" className={Styles.phonetxt} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className={Styles.address}>
          <span className={Styles.addresslabel}>Address</span>
          <textarea name="address" className={Styles.addresstxt} rows="3" onChange={(e) => setAddress(e.target.value)}></textarea>
        </div>
        <div className={Styles.location}>
          <div className={Styles.state}>
            <span className={Styles.statelabel}>State</span>
            <select name="state"  className={Styles.statetxt}
              onChange={(e) => {
                setStates(e.target.value);
                fetchDistrict(e.target.value);
              }}>
              <option value="">State</option>
              {
                statetData && statetData.map((item, index) => (
                  <option key={index} value={item._id}>{item.state_name}</option>

                ))
              }
            </select>
          </div>
          <div className={Styles.district}>
            <span className={Styles.districtlabel}>District</span>
            <select name="district" className={Styles.districttxt} 
            onChange={(e) => {
              setDistrict(e.target.value);
              fetchPlace(e.target.value);
            }}>
              <option value="">Select</option>
              {
                districtData && districtData.map((item, index) => (
                  <option key={index} value={item._id}>{item.district_name}</option>

                ))
              }
            </select>
          </div>
          <div className={Styles.place}>
            <span className={Styles.placelabel}>Place</span>
            <select name="place" className={Styles.placetxt} onChange={(e) => setPlace(e.target.value)}>
              <option value="">Select</option>
              {
              placeData && placeData.map((item, index) => (
                  <option key={index} value={item._id}>{item.place_name}</option>

                ))
              }
            </select>
          </div>
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
          <div className={Styles.profile}>
            <span className={Styles.photolabel}>ID Proof</span>
            <label className={Styles.photolabel1}>
              <IconButton
                component="label"
                role={undefined}

              >
                < UploadFileIcon />
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => setId(event.target.files[1])}

                />
              </IconButton>
              {/* <span className={Styles.photoicon}><UploadFileIcon/>Choose Photo</span>
          <input type='file' className={Styles.file}/> */}
            </label>
          </div>
        </div>
        <div className={Styles.password}>
          <span className={Styles.title}>Change Password</span>
          <div className={Styles.currentpassword}>
            <span className={Styles.currentpswdlbel}>Current Password</span>
            <input type="password" name="currentPassword" className={Styles.currentpswd} onChange={(e) => setCpswd(e.target.value)} />
          </div>
          <div className={Styles.newpassword}>
            <span className={Styles.newpswdlbel}>New Password</span>
            <input type="password" name="newPassword" className={Styles.newpswd} onChange={(e) => setNpswd(e.target.value)} />
          </div>
        </div>
        <div className={Styles.update}>
          <Button type="submit" className={Styles.updatebtn}>Update</Button>
        </div>
      </Box>
    </div>
  );
};

export default Main;