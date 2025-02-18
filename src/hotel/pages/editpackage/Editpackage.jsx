import React, { useState } from "react";

const EditPackage = () => {
  const [packageDetails, setPackageDetails] = useState({
    title: "Beach Adventure",
    description: "A thrilling beach experience with water sports.",
    price: 500,
    availability: true,
  });

  const handleChange = (key, value) => {
    setPackageDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handleUpdate = () => {
    console.log("Updated Package:", packageDetails);
    alert("Package updated successfully!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Package</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Package Title</label>
        <input
          type="text"
          value={packageDetails.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={packageDetails.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Price ($)</label>
        <input
          type="number"
          value={packageDetails.price}
          onChange={(e) => handleChange("price", e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={packageDetails.availability}
          onChange={(e) => handleChange("availability", e.target.checked)}
          className="mr-2"
        />
        <label className="text-sm font-medium">Available</label>
      </div>

      <button
        onClick={handleUpdate}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Update Package
      </button>
    </div>
  );
};

export default EditPackage;
