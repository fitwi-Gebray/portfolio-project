// src/pages/Home.jsx
import React from "react";
import { useState, useMemo } from "react";
import { Box, Typography, Grid } from "@mui/material";
import destinations from "../data/destinations.jsx";
import DestinationCard from "../components/DestinationCard.jsx";
import FilterTabs from "../components/FilterTabs.jsx";
import SearchBar from "../components/SearchBar.jsx";

function Home() {
  const [region, setRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesRegion = region === "All" || destination.region === region;

      const term = searchTerm.toLowerCase();
      const matchesSearch =
        destination.name.toLowerCase().includes(term) ||
        destination.country.toLowerCase().includes(term);

      return matchesRegion && matchesSearch;
    });
  }, [region, searchTerm]);

  return (
    <Box sx={{ p: 2 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: 250,
          backgroundImage:
            "url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          color: "white",
          textAlign: "center",
          px: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            letterSpacing: "1px",
          }}
        >
          Find Your Next Destination
        </Typography>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </Box>

      {/* Filters */}
      <FilterTabs value={region} onChange={setRegion} />

      {/* Popular Destinations Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#1a237e",
          letterSpacing: "0.5px",
          mb: 2,
          mt: 2,
        }}
      >
        Popular Destinations
      </Typography>

      {/* Destination Grid */}
      <Grid container spacing={3}>
        {filteredDestinations.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="body1">
              No destinations found. Try a different search or filter.
            </Typography>
          </Grid>
        ) : (
          filteredDestinations.map((destination) => (
            <Grid item xs={12} sm={6} md={4} key={destination.id}>
              <DestinationCard destination={destination} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default Home;
