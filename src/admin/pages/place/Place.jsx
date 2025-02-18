import React, { useState } from 'react'
import Styles from './place.module.scss'
import { Button, TextField } from '@mui/material'
import { MyTheme } from '../../context/ThemeContext'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Place = () => {
    const [check, setCheck] = useState(true)

    
    return (
        <MyTheme.Provider value={{ check, setCheck }}>
            <div className={`${check ? 'home light' : 'home dark'}`}>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className={Styles.Container}>
                        <div className={Styles.Banner}></div>
                        <div className={Styles.Sub}>
                            <div className={Styles.Text}>
                                <select className={Styles.Sel}>
                                    <option>District</option>
                                </select>
                                <TextField className={Styles.Field} id="standard-basic" label="Place Name" variant="standard" />
                                <Button className={Styles.Buttons} variant="contained">Submit</Button>
                            </div>
                            <div className={Styles.Image}>
                                <img src='https://img.freepik.com/free-vector/urban-landscape-with-high-skyscrapers_1308-127997.jpg?ga=GA1.1.1719564746.1730282531'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MyTheme.Provider>
    )
}

export default Place