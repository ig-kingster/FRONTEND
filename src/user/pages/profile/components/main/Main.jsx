import React, { useEffect, useState } from 'react';
import Styles from './Main.module.scss';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Dialog, DialogTitle, DialogContent, DialogActions, } from "@mui/material";
import { Box, IconButton, styled, Button } from '@mui/material';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

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
  // const [cpswd, setCpswd] = useState("")
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

  const fetchPlace
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

  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Street, City, Country",
    state: "",
    district: "",
    place: "",
    photo: null,
    idProof: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => setProfileData({ ...profileData, [e.target.name]: e.target.value });


  return (
    <div className={Styles.main}>
<span>Profile Info</span>

{/* Display Profile Data */}
<div className={Styles.profileContainer}>

  <div className={Styles.header}>
    <div className={Styles.imageSection}>
      {photo ? (
        <img src='https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg' alt="Profile" className={Styles.profileImage} />
      ) : (
        <div className={Styles.placeholderImage}>No Image</div>
      )}
    </div>
    <button onClick={handleOpen} className={Styles.editButton}><EditIcon className={Styles.editicon}/></button>
  </div>

  <div className={Styles.details}>
  <div className={Styles.inputGroup}>
    <label className={Styles.label}>Name</label>
    <input type="text" defaultValue={name} className={Styles.txtfld} />
  </div>

  <div className={Styles.inputGroup}>
    <label className={Styles.label}>Email</label>
    <input type="text" defaultValue={email} className={Styles.txtfld} />
  </div>

  <div className={Styles.inputGroup}>
    <label className={Styles.label}>Phone</label>
    <input type="text" defaultValue={phone} className={Styles.txtfld} />
  </div>

  <div className={Styles.inputGroup}>
    <label className={Styles.label}>Address</label>
    <input type="text" defaultValue={address} className={Styles.txtfld} />
  </div>

  <div className={Styles.inputGroup}>
    <label className={Styles.label}>State</label>
    <input type="text" defaultValue={state} className={Styles.txtfld} />
  </div>

  <div className={Styles.inputGroup}>
    <label className={Styles.label}>District</label>
    <input type="text" defaultValue={district} className={Styles.txtfld} />
  </div>

  <div className={Styles.inputGroup}>
    <label className={Styles.label}>Place</label>
    <input type="text" defaultValue={place} className={Styles.txtfld} />
  </div>
  <div className={Styles.inputGroup}>
    {/* <label className={Styles.label}>Place</label>
    
    <input type="text" defaultValue={place} className={Styles.txtfld} /> */}
    <Button variant='contained'onClick={handleOpen} className={Styles.editButton}>EDIT DETAILS / CHANGE PASSWORD</Button>

  </div>
  </div>
  </div>



      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
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
              <select name="state" className={Styles.statetxt}
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
                    onChange={(event) => setId(event.target.files[0])}

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
            <button type="submit" className={Styles.updatebtn}>Update</button>
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button> */}
        {/* <Button variant="contained" onClick={handleClose}>Save</Button> */}
      </DialogActions>
    </Dialog>
    </div >
  );
};

export default Main;