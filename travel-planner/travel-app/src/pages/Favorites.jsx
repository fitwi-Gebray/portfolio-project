import { Typography, Box } from "@mui/material";

function Favorites() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Your Favorites
      </Typography>

      <Typography variant="body1">
        You haven't added any favorite destinations yet.
      </Typography>
    </Box>
  );
}

export default Favorites;
