// src/components/DestinationCard.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        backgroundColor: "white",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={destination.image}
        alt={destination.name}
        sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      />

      <CardContent>
        {/* Country */}
        <Typography
          sx={{
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "#546e7a",
            textTransform: "uppercase",
            letterSpacing: "0.7px",
            mb: 0.5,
          }}
        >
          {destination.country}
        </Typography>

        {/* City Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#263238",
            mb: 1,
          }}
        >
          {destination.name}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.5,
          }}
        >
          {destination.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          component={RouterLink}
          to={`/details/${destination.id}`}
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          View details
        </Button>
      </CardActions>
    </Card>
  );
}

export default DestinationCard;
