import React, { useEffect, useState } from "react";
import { Input, TextareaAutosize, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getAllCompanies,
  getCompanyById,
  addCompany,
  updateCompany,
  deleteCompany,
} from "../api/companyApi"; // Import API functions

function CompanyMS() {
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await getAllCompanies();
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const handleAddCompany = async () => {
    const newCompany = { name, description };
    try {
      await addCompany(newCompany);
      fetchCompanies(); // Refresh list
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const handleDeleteCompany = async (id) => {
    try {
      await deleteCompany(id);
      fetchCompanies(); // Refresh list
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Company Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          width: "100%",
          marginBottom: "20px",
        }}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          width: "100%",
          marginBottom: "20px",
          color:'black',
        }}
      />
      <Button variant="contained" color="success" onClick={handleAddCompany}>
        Add Company
      </Button>

      <h2>Company List</h2>
{companies.map((company) => (
  <div key={company.id} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
    <p style={{ color: "black", fontWeight: "bold", margin: 0 }}>
      {company.name} - {company.description}
    </p>
    <Button
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => handleDeleteCompany(company.id)}
    >
      Delete
    </Button>
    
  </div>
))}

    </div>
  );
}

export default CompanyMS;
