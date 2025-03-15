import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent White
        backdropFilter: "blur(10px)", // Glass Effect
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft Shadow
        width: "100vw",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={location.pathname}
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: "lightblue" } }} // Light blue underline
        >
          <Tab
            label="Company"
            component={Link}
            to="/"
            value="/"
            sx={{ color: "black", fontWeight: "bold" }}
          />
          <Tab
            label="Jobs"
            component={Link}
            to="/jobs"
            value="/jobs"
            sx={{ color: "black", fontWeight: "bold" }}
          />
          <Tab
            label="Reviews"
            component={Link}
            to="/reviews"
            value="/reviews"
            sx={{ color: "black", fontWeight: "bold" }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
