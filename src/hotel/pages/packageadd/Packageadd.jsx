import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../../components/sidebar/Sidebar";
import Styles from "./Packageadd.module.scss";
import Navbar from "../../components/navbar/Navbar";
import { PhotoCamera, Hotel } from "@mui/icons-material";


const hid = sessionStorage.getItem("hid");



const Packageadd = () => {
    const [packageData, setPackageData] = useState({
        packageName: "",
        packagePrice: "",
        duration: "",
        packageDescription: "",
        packageImage: null,
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("packageImage", packageData.packageImage);
        data.append("packageName", packageData.packageName);
        data.append("packageDescription", packageData.packageDescription);
        data.append("duration", packageData.duration);
        data.append("packagePrice", packageData.packagePrice);

        try {
            const response = await axios.post(`http://127.0.0.1:8000/packageadd/${hid}`, data);
            console.log("Added successfully:", response.data);
            toast.success("Registration Submitted Successfully");

            // Reset form
            setPackageData({
                packageName: "",
                packagePrice: "",
                duration: "",
                packageDescription: "",
                packageImage: null,
            });
        } catch (error) {
            console.error("Error adding package:", error);
            toast.error("Failed to add package");
        }
    };





    const handleChange = (e) => {
        const { name, value } = e.target;
        setPackageData({ ...packageData, [name]: value });
    };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPackageData({ ...packageData, packageImage: reader.result });
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPackageData({ ...packageData, packageImage: file }); // Store as file
        }
    };
    
    return (
        <div className={Styles.container}>
            <Navbar />
            <div className={Styles.dashboardWrapper}>
                <Sidebar />
                <div className={Styles.mainContent}>
                    <div className={Styles.header}>
                        <h1>
                            <Hotel /> Create Travel Package
                        </h1>
                        <p>Fill in the details to create a new travel package</p>
                    </div>

                    <div className={Styles.formContainer}>
                        <div className={Styles.imageUploadSection}>



                            {/* <div className={Styles.imagePreview}>
                                {packageData.packageImage ? (
                                    <img
                                        src={URL.createObjectURL(packageData.packageImage)}
                                        alt="Package preview"
                                    />
                                ) : (
                                    <div className={Styles.uploadPrompt}>
                                        <PhotoCamera className={Styles.uploadIcon} />
                                        <p>Click to upload package image</p>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            required
                                        />
                                    </div>
                                )}
                            </div> */}






<div className={Styles.imagePreview}  onClick={() => document.getElementById("fileInput").click()}>
    {packageData.packageImage ? (
        <img
            src={URL.createObjectURL(packageData.packageImage)}
            alt="Package preview"
        />
    ) : (
        <div className={Styles.uploadPrompt}>
            <PhotoCamera className={Styles.uploadIcon} />
            <p>Click to upload package image</p>
        </div>
    )}
    
    {/* Move input OUTSIDE the conditional rendering so it stays always visible */}
    <input
    id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
        style={{ display: "none" }}
        className={Styles.files}
    />
</div>
</div>

                        <form onSubmit={handleSubmit} className={Styles.packageForm}>
                            <div className={Styles.formGroup}>
                                <label>
                                    <span className={Styles.required}>*</span> Package Name
                                </label>
                                <input
                                    type="text"
                                    name="packageName"
                                    placeholder="Ex: Tropical Paradise Getaway"
                                    value={packageData.packageName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={Styles.formRow}>
                                <div className={Styles.formGroup}>
                                    <label>
                                        <span className={Styles.required}>*</span> Price ($)
                                    </label>
                                    <input
                                        type="number"
                                        name="packagePrice"
                                        placeholder="Enter package price"
                                        value={packageData.packagePrice}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={Styles.formGroup}>
                                    <label>
                                        <span className={Styles.required}>*</span> Duration
                                    </label>
                                    <input
                                        type="text"
                                        name="duration"
                                        placeholder="Ex: 3 Days 2 Nights"
                                        value={packageData.duration}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={Styles.formGroup}>
                                <label>
                                    <span className={Styles.required}>*</span> Description
                                </label>
                                <textarea
                                    name="packageDescription"
                                    placeholder="Describe the package details..."
                                    value={packageData.packageDescription}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className={Styles.submitButton}>
                                Create Package
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packageadd;
