import React, { useEffect, useState } from 'react'
import Styles from './place.module.scss'
import { Box, Button, TextField } from '@mui/material'
import { MyTheme } from '../../context/ThemeContext'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios";

const Place = () => {
    const [check, setCheck] = useState(true)
    // const [district, setDistrict] = useState("")
    //   const [data, setData] = useState([])

    // const fetchDistrict = () => {
    //     axios.get(`http://127.0.0.1:8000/district`).then((response) => {
    //         console.log(response.data);
    //         setDistrict(response.data)
    //     });
    // };
    // useEffect(() => {
    //     fetchDistrict()
    // }, [])
    const [statetData, setStatedata] = useState([])
    const [districtData, setdistrictdata] = useState([])
    const [district, setDistrict] = useState("")
  const [pname, setPname] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = {
            place_name:pname,
            district_id:district
        }
        const response = await axios.post('http://127.0.0.1:8000/place', data)
        console.log('District added successful:', response.data);
        setPname("")
        setDistrict("")
    } catch (error) {
        console.error('Error registering:', error);
    }
}



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
                                <select className={Styles.Sel} onChange={(e) => {
                                    fetchDistrict(e.target.value);
                                }}>
                                    <option value="">State</option>
                                    {
                                        statetData && statetData.map((item, index) => (
                                            <option key={index} value={item._id}>{item.state_name}</option>

                                        ))
                                    }
                                </select>
                                <select className={Styles.Sel} onChange={(e) => {
                                    setDistrict(e.target.value);
                                    
                                }}>
                                    <option value="">Select</option>
                                    {
                                        districtData && districtData.map((item, index) => (
                                            <option key={index} value={item._id}>{item.district_name}</option>

                                        ))
                                    }
                                </select>
                                <TextField className={Styles.Field} id="standard-basic" label="Place Name" variant="standard" onChange={(e) => setPname(e.target.value)} />
                                <Button type='submit' className={Styles.Buttons} variant="contained">Submit</Button>
                            </div>
                            <div className={Styles.Image}>
                                <img src='https://img.freepik.com/free-vector/urban-landscape-with-high-skyscrapers_1308-127997.jpg?ga=GA1.1.1719564746.1730282531'></img>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </MyTheme.Provider>
    )
}

export default Place