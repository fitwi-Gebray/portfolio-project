// src/components/SearchBar.jsx
import React from "react";
import { TextField, Box } from "@mui/material";

function SearchBar({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ mt: 2, width: "100%", maxWidth: 400 }}>
      <TextField
        fullWidth
        placeholder="Search destinations..."
        value={value}
        onChange={handleChange}
        size="small"
      />
    </Box>
  );
}

export default SearchBar;
