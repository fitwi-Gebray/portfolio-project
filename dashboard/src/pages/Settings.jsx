import {
  Box,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export default function Settings() {
  const { darkMode, setDarkMode, autoUpdate, setAutoUpdate } = useSettings();

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Settings
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Preferences
        </Typography>

        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          }
          label="Dark Mode"
        />

        <Divider sx={{ my: 2 }} />

        <FormControlLabel
          control={
            <Switch
              checked={autoUpdate}
              onChange={(e) => setAutoUpdate(e.target.checked)}
            />
          }
          label="Auto‑Update Dashboard"
        />
      </Paper>
    </Box>
  );
}
