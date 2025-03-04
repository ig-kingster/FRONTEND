


  import React, { useState, useEffect } from "react";
  import Styles from "./Packages.module.scss";
  import Sidebar from "../../components/sidebar/Sidebar";
  import { Link } from "react-router-dom";
  import Navbar from "../../components/navbar/Navbar";
  import { 
    Delete, 
    Edit, 
    Hotel, 
    CalendarToday, 
    Attractions, 
    LocalOffer,
    CheckCircle,
    Cancel
  } from "@mui/icons-material";
  import axios from "axios";
  import { toast } from "react-toastify";



  const PackagePage = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const hid = sessionStorage.getItem("hid");


    useEffect(() => {
      fetchData();
    }, []);


    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/packages/${hid}`);
        console.log("API Response:", response.data);  // Debugging step
        const data = response.data;

        const packagesArray = Array.isArray(data) ? data : [data];
        setPackages(packagesArray);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };
    
    const handleDelete = async (package_id) => {
      try {
        await axios.delete(`http://127.0.0.1:8000/deletepkg/${package_id}`);
        setPackages((prev) => prev.filter((pkg) => pkg._id !== package_id));
        toast.success("Package deleted successfully!");
      } catch (error) {
        console.error("Error deleting package:", error);
        toast.error("Failed to delete package.");
      }
    };
    
    // const fetchPackages = async () => {
    //   try {
    //     const response = await axios.get(`http://127.0.0.1:8000/packages/${hid}`, data);

    //     if (!response.ok) {
    //       throw new Error("Failed to fetch packages");
    //     }
    //     const data = await response.json();
    //     return data;
    //   } catch (error) {
    //     console.error("Error fetching packages:", error);
    //     return [];
    //   }
    // };


    return (
      <div className={Styles.container}>
        <Navbar/>  
        <div className={Styles.dashboardWrapper}>
          <Sidebar />
          <div className={Styles.mainContent}>
            <div className={Styles.header}>
              <h1><Hotel /> Travel Packages</h1>
              <Link to="../packageadd" className={Styles.addButton}>
                + Create New Package
              </Link>
            </div>

            {loading ? (
              <div className={Styles.loading}>
                <div className={Styles.loader}></div>
                <p>Loading Packages...</p>
              </div>
            ) : (
              <div className={Styles.packageGrid}>
                {packages.map((pkg) => (

                  <div key={pkg.package_id} className={Styles.packageCard}>
                    <div className={Styles.cardHeader}>
                      {/* <div className={Styles.statusBadge}>
                        {pkg.packagehead_status === 'Active' ? (
                          <CheckCircle className={Styles.activeIcon} />
                        ) : (
                          <Cancel className={Styles.inactiveIcon} />
                        )}
                        <span>{pkg.packagehead_status}</span>
                      </div> */}
                      <img 
                        // src={pkg.packagebody[0]?.gallery[0]?.gallery_file || '/default-package.jpg'} 
                        src={pkg.package_image} 

                        alt="Package cover" 
                        className={Styles.packageImage}
                      />
                    </div>
                    
                    <div className={Styles.cardBody}>
                      <h3>{pkg.package_name}</h3>
                      
                      <div className={Styles.metaInfo}>
                        <div className={Styles.metaItem}>
                          <CalendarToday className={Styles.metaIcon} />
                          <span>{pkg.package_duration} Days</span>
                        </div>
                        <div className={Styles.metaItem}>
                          <LocalOffer className={Styles.metaIcon} />
                          <span>${pkg.package_price}</span>
                        </div>
                        {/* <div className={Styles.metaItem}>
                          <Hotel className={Styles.metaIcon} />
                          <span>{pkg.packagehead_room_count} Rooms</span>
                        </div> */}
                      </div>

                      {/* <div className={Styles.galleryPreview}>
                        {pkg.packagebody[0]?.gallery.map((galleryItem) => (
                          <div key={galleryItem.gallery_id} className={Styles.galleryThumb}>
                            <img
                              src={galleryItem.gallery_file}
                              alt={galleryItem.gallery_description}
                            />
                          </div>
                        ))}
                      </div> */}

                      <div className={Styles.actions}>
                        <Link 
                          to={`../editpackage/${pkg.package_id}`}
                          className={Styles.editButton}
                        >
                          <Edit className={Styles.buttonIcon} />
                          Edit
                        </Link>
                        <button
                          className={Styles.deleteButton}
                          onClick={() => handleDelete(pkg._id)}

                        >
                          <Delete className={Styles.buttonIcon} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default PackagePage;