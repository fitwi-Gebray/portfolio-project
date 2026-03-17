import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Topbar({ toggleSidebar }) {
  return (
    <AppBar position="static" sx={{ background: "#1e1e1e" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
}
