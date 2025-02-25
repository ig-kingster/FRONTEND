import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Styles from "./ManageHotel.module.scss"; // SCSS module
import Navbar from "../../components/navbar/Navbar";

// Mock API function for fetching hotel data
const fetchHotelData = (hotelId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hotel_id: hotelId,
        hotel_name: "Grand Palace Hotel",
        hotel_email: "info@grandpalace.com",
        hotel_address: "123, Beach Road, California",
        place_id: 1,
        hotel_proof: "Property Proof",
        hotel_photo: "/images/hotelImage.jpg",
        hotel_status: "Active",
        hotel_room_count: 120,
        hotel_password: "password123",
      });
    }, 1000); // Simulated delay of 1 second
  });
};

// Mock API function for updating hotel data
const updateHotelData = (hotelId, hotelData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hotelData) {
        resolve({ message: "Hotel updated successfully!" });
      } else {
        reject({ message: "Failed to update hotel" });
      }
    }, 1000); // Simulated delay of 1 second
  });
};

const ManageHotel = () => {
  const [hotel, setHotel] = useState({
    hotel_id: 1,
    hotel_name: "",
    hotel_email: "",
    hotel_address: "",
    place_id: 0,
    hotel_proof: "",
    hotel_photo: "",
    hotel_status: "",
    hotel_room_count: 0,
    hotel_password: "",
  });

  // Fetching hotel data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHotelData(hotel.hotel_id);
        setHotel(data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };
    fetchData();
  }, [hotel.hotel_id]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to update hotel details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateHotelData(hotel.hotel_id, hotel);
      alert(response.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={Styles.navbar}>
      <Navbar/>  
    <div className={Styles.manageHotelContainer}>
      <Sidebar />
      <div className={Styles.manageHotelSection}>
        <h1>Manage Hotel</h1>
        <div className={Styles.profileEditContainer}>
          {/* Left Column: Hotel Photo */}
          <div className={Styles.profilePhotoSection}>
            <img
              src={hotel.hotel_photo}
              alt="Hotel"
              className={Styles.hotelPhoto}
            />
            <button className={Styles.changePhotoButton}>Change Photo</button>
          </div>

          {/* Right Column: Form Fields */}
          <form onSubmit={handleSubmit} className={Styles.hotelForm}>
            <div className={Styles.formGroup}>
              <label htmlFor="hotel_name">Hotel Name</label>
              <input
                type="text"
                id="hotel_name"
                name="hotel_name"
                value={hotel.hotel_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="hotel_email">Hotel Email</label>
              <input
                type="email"
                id="hotel_email"
                name="hotel_email"
                value={hotel.hotel_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="hotel_address">Hotel Address</label>
              <input
                type="text"
                id="hotel_address"
                name="hotel_address"
                value={hotel.hotel_address}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="place_id">Place ID</label>
              <input
                type="number"
                id="place_id"
                name="place_id"
                value={hotel.place_id}
                onChange={handleChange}
              />
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="hotel_proof">Hotel Proof</label>
              <input
                type="text"
                id="hotel_proof"
                name="hotel_proof"
                value={hotel.hotel_proof}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="hotel_status">Hotel Status</label>
              <select
                id="hotel_status"
                name="hotel_status"
                value={hotel.hotel_status}
                onChange={handleChange}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Under Renovation">Under Renovation</option>
              </select>
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="hotel_room_count">Room Count</label>
              <input
                type="number"
                id="hotel_room_count"
                name="hotel_room_count"
                value={hotel.hotel_room_count}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="hotel_password">Password</label>
              <input
                type="password"
                id="hotel_password"
                name="hotel_password"
                value={hotel.hotel_password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={Styles.submitButton}>
              Update Hotel
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ManageHotel;