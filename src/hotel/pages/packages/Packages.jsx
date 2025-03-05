
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Switch, TextField } from "@mui/material";
import Styles from "./Packages.module.scss";

const hid = sessionStorage.getItem("hid");

const PackagePage = () => {
  const [packages, setPackages] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/packages/${hid}`);
      setPackages(response.data);
    } catch (error) {
      toast.error("Failed to fetch packages");
    }
  };

  const handleEditClick = (pkg) => {
    setSelectedPackage(pkg);
    setEditDialogOpen(true);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/package/${selectedPackage.packagehead_id}`, selectedPackage);
      toast.success("Package updated successfully");
      fetchPackages();
      setEditDialogOpen(false);
    } catch (error) {
      toast.error("Failed to update package");
    }
  };

  const handleToggleStatus = async (pkg) => {
    try {
      const updatedStatus = pkg.packagehead_status === "Active" ? "Inactive" : "Active";
      await axios.put(`http://127.0.0.1:8000/package/status/${pkg.packagehead_id}`, { status: updatedStatus });
      toast.success("Status updated");
      fetchPackages();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this package?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/package/${id}`);
      toast.success("Package deleted successfully");
      fetchPackages();
    } catch (error) {
      toast.error("Failed to delete package");
    }
  };

  return (
    <div className={Styles.container}>
      <Navbar />
      <div className={Styles.dashboardWrapper}>
        <Sidebar />
        <div className={Styles.mainContent}>
          <h1>Package List</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Days</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.packagehead_id}>
                  <td>{pkg.packagehead_name}</td>
                  <td>{pkg.packagehead_days}</td>
                  <td>${pkg.packagehead_price}</td>
                  <td>
                    <Switch
                      checked={pkg.packagehead_status === "Active"}
                      onChange={() => handleToggleStatus(pkg)}
                    />
                  </td>
                  <td>
                    <Button onClick={() => handleEditClick(pkg)}>Edit</Button>
                    <Button onClick={() => handleDelete(pkg.packagehead_id)} color="error">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Dialog */}
      {selectedPackage && (
        <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Edit Package</DialogTitle>
          <DialogContent>
            <TextField
              label="Package Name"
              fullWidth
              value={selectedPackage.packagehead_name}
              onChange={(e) => setSelectedPackage({ ...selectedPackage, packagehead_name: e.target.value })}
            />
            <TextField
              label="Days"
              fullWidth
              type="number"
              value={selectedPackage.packagehead_days}
              onChange={(e) => setSelectedPackage({ ...selectedPackage, packagehead_days: e.target.value })}
            />
            <TextField
              label="Price"
              fullWidth
              type="number"
              value={selectedPackage.packagehead_price}
              onChange={(e) => setSelectedPackage({ ...selectedPackage, packagehead_price: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveEdit} color="primary">Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};



export default PackagePage;