import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Styles from './Packageadd.module.scss'
const Packageadd = () => {
    const [packageData, setPackageData] = useState({
      packageName: "",
      packagePrice: "",
      packageDescription: "",
      packageImage: null,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setPackageData({ ...packageData, [name]: value });
    };
  
    const handleImageChange = (e) => {
      setPackageData({ ...packageData, packageImage: e.target.files[0] });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Package Data Submitted:", packageData);
      // API Call to save package
    };
  
    return (
      <div className={Styles.container}>
        <Sidebar />
        <div className={Styles.mainContent}>
          <h2 className={Styles.heading}>Add New Package</h2>
          <div className={Styles.packageCard}>
            <div className={Styles.detailsSection}>
              <form onSubmit={handleSubmit}>
                <div className={Styles.info}>
                  <label>Package Name</label>
                  <input
                    type="text"
                    name="packageName"
                    placeholder="Enter package name"
                    value={packageData.packageName}
                    onChange={handleChange}
                    required
                  />
                </div>
  
                <div className={Styles.info}>
                  <label>Package Price ($)</label>
                  <input
                    type="number"
                    name="packagePrice"
                    placeholder="Enter package price"
                    value={packageData.packagePrice}
                    onChange={handleChange}
                    required
                  />
                </div>
  
                <div className={Styles.info}>
                  <label>Package Description</label>
                  <textarea
                    name="packageDescription"
                    placeholder="Enter package details"
                    value={packageData.packageDescription}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
  
                <div className={Styles.info}>
                  <label>Upload Image</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} required />
                </div>
  
                <button type="submit" className={Styles.bookNow}>Add Package</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    

  )
}

export default Packageadd