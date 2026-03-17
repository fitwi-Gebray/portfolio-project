import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const drawerContent = (
    <Box
      sx={{
        width: 240,
        p: 2,
        backgroundColor: "#1e1e1e",
        height: "100%",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ mb: 3 }}>
        Fitwi Dashboard
      </Typography>

      <List>
        <ListItemButton component={Link} to="/" onClick={onClose}>
          <ListItemText primary="Overview" />
        </ListItemButton>

        <ListItemButton component={Link} to="/analytics" onClick={onClose}>
          <ListItemText primary="Analytics" />
        </ListItemButton>

        <ListItemButton component={Link} to="/users" onClick={onClose}>
          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton component={Link} to="/settings" onClick={onClose}>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant={isMobile ? "temporary" : "persistent"}
      sx={{
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#1e1e1e",
          color: "white",
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
