import React, { useState, useEffect } from "react";
import Styles from "./Packages.module.scss"; // SCSS module
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

// Mock API functions
const fetchPackages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          packagehead_id: 1,
          packagehead_days: 5,
          packagehead_price: 5000,
          packagehead_details: "5-Day Summer Package",
          packagehead_status: "Active",
          packagehead_count: 10,
          packagehead_room_count: 20,
          packagebody: [
            {
              packagebody_id: 1,
              packagebody_details: "Day 1: Beach Visit",
              place_id: 1,
              gallery: [
                {
                  gallery_id: 1,
                  gallery_file: "/images/beach.jpg",
                  gallery_description: "Beach View",
                },
              ],
            },
          ],
        },
      ]);
    }, 1000); // Simulated delay
  });
};

const deletePackage = (packagehead_id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: `Package ${packagehead_id} deleted successfully!` });
    }, 1000); // Simulated delay
  });
};

const PackagePage = () => {
  const [packages, setPackages] = useState([]);

  // Fetch packages on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPackages();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchData();
  }, []);

  // Handle package deletion
  const handleDelete = async (packagehead_id) => {
    try {
      const response = await deletePackage(packagehead_id);
      alert(response.message);
      setPackages((prev) =>
        prev.filter((pkg) => pkg.packagehead_id !== packagehead_id)
      );
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return (
    <div className={Styles.navbar}>
      <Navbar/>  
    <div className={Styles.packagePageContainer}>
   
    <div className={Styles.main}>  <Sidebar/></div>
    <div className={Styles.main1}>
      <h1>Package Management</h1>
      <div className={Styles.packageList}>
        {packages.map((pkg) => (
          <div key={pkg.packagehead_id} className={Styles.packageCard}>
            <div className={Styles.packageHeader}>
              <h2>{pkg.packagehead_details}</h2>
              <p>Days: {pkg.packagehead_days}</p>
              <p>Price: ${pkg.packagehead_price}</p>
              <p>Status: {pkg.packagehead_status}</p>
              <p>Room Count: {pkg.packagehead_room_count}</p>
            </div>
            <div className={Styles.packageBody}>
              <h3>Package Details:</h3>
              {pkg.packagebody.map((body) => (
                <div key={body.packagebody_id} className={Styles.bodyItem}>
                  <p>{body.packagebody_details}</p>
                  <div className={Styles.gallery}>
                    {body.gallery.map((galleryItem) => (
                      <div key={galleryItem.gallery_id} className={Styles.galleryItem}>
                        <img
                          src={galleryItem.gallery_file}
                          alt={galleryItem.gallery_description}
                        />
                        <p>{galleryItem.gallery_description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={Styles.actions}>
              {/* <button
                className={Styles.editButton}
                onClick={() => alert(`Edit package ${pkg.packagehead_id}`)}
              >
                Edit
              </button> */}
                          <Link to='../editpackage'className={Styles.editButton}>Edit</Link>

              <button
                className={Styles.deleteButton}
                onClick={() => handleDelete(pkg.packagehead_id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default PackagePage;