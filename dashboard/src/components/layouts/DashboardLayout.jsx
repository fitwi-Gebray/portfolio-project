import { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        variant={isMobile ? "temporary" : "permanent"}
      />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Topbar toggleSidebar={toggleSidebar} />

        <Box
          sx={{
            p: 3,
            overflowY: "auto",
            height: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
