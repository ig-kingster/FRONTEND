import React, { useState, useEffect } from "react";
import Styles from "./State.module.scss";
import { Box, Button, TextField, Paper } from "@mui/material";
import { MyTheme } from "../../context/ThemeContext";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import TableRowsIcon from '@mui/icons-material/TableRows';

const State = () => {
    const [check, setCheck] = useState(true);
    const [sname, setSname] = useState("");
    const [states, setStates] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const paginationModel = { page: 0, pageSize: 5 };

    useEffect(() => {
        fetchStates();
    }, []);

    const fetchStates = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/state");
            const formattedStates = response.data.map((state, index) => ({
                id: state.id || index + 1,
                state_name: state.state_name,
            }));
            setStates(formattedStates);
        } catch (error) {
            console.error("Error fetching states:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { state_name: sname };
            await axios.post("http://127.0.0.1:8000/state", data);
            setSname("");
            fetchStates();
            setShowForm(false);
        } catch (error) {
            console.error("Error adding state:", error);
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "state_name", headerName: "State Name", width: 200 },
    ];

    return (
        <MyTheme.Provider value={{ check, setCheck }}>
            <div className={`${check ? "home light" : "home dark"}`}>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className={Styles.top}>


                        <h1>MANAGE STATE</h1>
                        <Button
                            className={Styles.AddButton}
                            onClick={() => setShowForm(!showForm)}
                        >
                            {showForm ? <TableRowsIcon /> : <AddIcon />}
                        </Button>
                    </div>
                    {showForm ? (
                        <Box component={"form"} onSubmit={handleSubmit} className={Styles.Container}>

                            <div className={Styles.Sub}>
                                <div className={Styles.Text}>
                                    <TextField
                                        className={Styles.Field}
                                        label="State Name"
                                        variant="standard"
                                        value={sname}
                                        onChange={(e) => setSname(e.target.value)}
                                    />
                                    <Button type="submit" className={Styles.Buttons} variant="contained">
                                        Submit
                                    </Button>
                                </div>
                                <div className={Styles.Image}>
                                    <img
                                        src="https://img.freepik.com/free-vector/vector-isometric-3d-illustrations-modern-urban-quarter-with-skyscrapers-offices-residential-buildings-transport_1441-256.jpg?ga=GA1.1.1719564746.1730282531"
                                        alt="City Illustration"
                                    />
                                </div>
                            </div>
                        </Box>
                    ) : (
                        <Paper className={Styles.TableContainer}>
                            <DataGrid rows={states}
                                columns={columns}
                                initialState={{ pagination: { paginationModel } }}
                                pageSizeOptions={[4, 10]}
                                checkboxSelection
                                sx={{ border: 0 }} />
                        </Paper>
                    )}


                </div>
            </div>
        </MyTheme.Provider>
    );
};

export default State;
