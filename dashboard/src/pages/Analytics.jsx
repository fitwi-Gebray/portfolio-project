import { useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useSettings } from "../context/SettingsContext";

const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 600 },
  { month: "Mar", value: 800 },
  { month: "Apr", value: 700 },
  { month: "May", value: 900 },
  { month: "Jun", value: 1200 },
];

export default function Analytics() {
  const { autoUpdate } = useSettings();

  useEffect(() => {
    if (!autoUpdate) return;

    const interval = setInterval(() => {
      console.log("Auto-updating analytics data...");
      // here you could update chart data from an API
    }, 5000);

    return () => clearInterval(interval);
  }, [autoUpdate]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Analytics Overview
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              $12,400
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Users</Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              1,240
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Sales</Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              320
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Growth</Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              +14%
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, height: 400 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Monthly Performance
        </Typography>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#1976d2"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}
