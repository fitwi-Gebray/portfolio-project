// src/components/FilterTabs.jsx
import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const REGIONS = ["All", "Europe", "Asia", "Africa", "America"];

function FilterTabs({ value, onChange }) {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {REGIONS.map((region) => (
          <Tab key={region} label={region} value={region} />
        ))}
      </Tabs>
    </Box>
  );
}

export default FilterTabs;
