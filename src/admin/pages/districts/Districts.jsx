import React, { useEffect, useState } from 'react'
import Styles from './district.module.scss'
import { Box, Button, Paper, TextField } from '@mui/material'
import { MyTheme } from '../../context/ThemeContext'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'


const Districts = () => {
  const [check, setCheck] = useState(true)
  const [dname, setDname] = useState("")
  const [state_id, setState] = useState("")
  const [data, setData] = useState([])
  const paginationModel = { page: 0, pageSize: 5 };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const data = {
              district_name:dname,
              state_id
          }
          const response = await axios.post('http://127.0.0.1:8000/district', data)
          console.log('District added successful:', response.data);
          setDname("")
          setState("")
      } catch (error) {
          console.error('Error registering:', error);
      }
  }

  const fetchState = () => {
      axios.get(`http://127.0.0.1:8000/state`).then((response) => {
          console.log(response.data);
          setData(response.data)
      });
  };
  useEffect(() => {
    fetchState()
  }, [])


  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "state_name", headerName: "State Name", width: 200 },
    { field: "district_name", headerName: "District Name", width: 200 },


];

  return (
    <MyTheme.Provider value={{ check, setCheck }}>
      <div className={`${check ? 'home light' : 'home dark'}`}>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <Box component={'form'} onSubmit={handleSubmit} className={Styles.Container}>
            <div className={Styles.Banner}></div>
            <div className={Styles.Sub}>
              
              <div className={Styles.Text}>
              <select className={Styles.Sel} onChange={(e) => setState(e.target.value)} value={state_id}>
                                    <option>State</option>
                                    {
                                        data && data.map((item, index) => (
                                            <option key={index} value={item._id}>{item.state_name}</option>

                                        ))
                                    }
                                </select>

                <TextField className={Styles.Field} id="standard-basic" value={dname} label="District Name" variant="standard" onChange={(e) => setDname(e.target.value)} />
                  
                <Button type='submit' className={Styles.Buttons} variant="contained">Submit</Button>
              </div>
              <div className={Styles.Image}>
                <img src="https://img.freepik.com/free-vector/urban-cityscape-isolated-white-background_1308-98973.jpg?t=st=1738040680~exp=1738044280~hmac=0e4f5b4bb610eec91ceb7b2deec96055025ad2bc7499b3fc4e74992348b554fd&w=1060" />
              </div>
            </div>

          </Box>
        </div>
   
      </div>
    </MyTheme.Provider>
  )
}

export default Districts