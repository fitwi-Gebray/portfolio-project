import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const activity = [
  { id: 1, text: "New user registered: Sarah Smith" },
  { id: 2, text: "Order #1234 has been shipped" },
  { id: 3, text: "Payment received from John Doe" },
  { id: 4, text: "Server backup completed" },
];

export default function RecentActivity() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recent Activity
      </Typography>

      <List>
        {activity.map((item) => (
          <ListItem key={item.id} divider>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
