// src/pages/Details.jsx
import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import destinations from "../data/destinations.jsx";

function Details() {
  const { id } = useParams();
  const destinationId = Number(id);

  const destination = destinations.find((d) => d.id === destinationId);

  if (!destination) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Destination not found
        </Typography>
        <Typography variant="body1">
          We couldn't find a destination with ID {id}.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardMedia
          component="img"
          height="320"
          image={destination.image}
          alt={destination.name}
        />

        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {destination.name}
          </Typography>

          <Typography variant="h6" color="text.secondary" gutterBottom>
            {destination.country} • {destination.region}
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.7 }}>
            {destination.description}
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Highlights
            </Typography>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {destination.highlights.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  color="primary"
                  variant="outlined"
                  sx={{ fontSize: "0.9rem" }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Why Visit {destination.name}?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This destination is known for its unique atmosphere, cultural
              richness, and unforgettable experiences. Whether you're exploring
              local cuisine, enjoying scenic views, or discovering hidden gems,{" "}
              {destination.name}
              offers something special for every traveler.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Details;
