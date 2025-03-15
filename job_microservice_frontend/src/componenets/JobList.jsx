import React, { useEffect, useState } from "react";
import { Input, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardContent, Typography } from "@mui/material";
import {
  getAllJobs,
  getJobById,
  addJob,
  updateJob,
  deleteJob,
} from "../api/jobApi"; // Import API functions

function JobMS() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [location, setLocation] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      const formattedJobs = response.data
        .filter((item) => item.job && item.company)
        .map((item) => ({
          ...item.job,
          companyName: item.company.name || "Unknown Company",
        }));
      setJobs(formattedJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleAddJob = async () => {
    const newJob = { title, description, minSalary, maxSalary, location, companyId };
    try {
      await addJob(newJob);
      fetchJobs(); 
      resetForm();
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const handleDeleteJob = async (id) => {
    try {
      await deleteJob(id);
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleEditJob = (job) => {
    setEditingId(job.id);
    setTitle(job.title || "");
    setDescription(job.description || "");
    setMinSalary(job.minSalary || "");
    setMaxSalary(job.maxSalary || "");
    setLocation(job.location || "");
    setCompanyId(job.companyId || "");
  };

  const handleUpdateJob = async () => {
    const updatedJob = { title, description, minSalary, maxSalary, location, companyId };
    try {
      await updateJob(editingId, updatedJob);
      fetchJobs();
      resetForm();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setMinSalary("");
    setMaxSalary("");
    setLocation("");
    setCompanyId("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{editingId ? "Update Job" : "Add Job"}</h2>
      <TextField fullWidth label="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} margin="dense" />
      <TextField fullWidth label="Description" value={description} onChange={(e) => setDescription(e.target.value)} margin="dense" />
      <TextField fullWidth label="Min Salary" value={minSalary} onChange={(e) => setMinSalary(e.target.value)} margin="dense" />
      <TextField fullWidth label="Max Salary" value={maxSalary} onChange={(e) => setMaxSalary(e.target.value)} margin="dense" />
      <TextField fullWidth label="Location" value={location} onChange={(e) => setLocation(e.target.value)} margin="dense" />
      <TextField fullWidth label="Company ID" value={companyId} onChange={(e) => setCompanyId(e.target.value)} margin="dense" />
      
      {editingId ? (
        <Button variant="contained" color="primary" onClick={handleUpdateJob} style={{ marginTop: "10px" }}>
          Update Job
        </Button>
      ) : (
        <Button variant="contained" color="success" onClick={handleAddJob} style={{ marginTop: "10px" }}>
          Add Job
        </Button>
      )}
<h2>Job List</h2>
{jobs.map((job) => (
  <Card key={job.id} variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
    <CardContent>
      <Typography variant="h6" color="primary">
        {job.title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {job.location} - ₹{job.minSalary} - ₹{job.maxSalary}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Company: {job.companyName}
      </Typography>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px",justifyContent:'center'}}>
        <Button variant="contained" color="primary" onClick={() => handleEditJob(job)}>
          Edit
        </Button>
        <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDeleteJob(job.id)}>
          Delete
        </Button>
      </div>
    </CardContent>
  </Card>
))}

    </div>
  );
}

export default JobMS;