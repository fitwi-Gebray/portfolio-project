import { Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <SettingsProvider>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </SettingsProvider>
  );
}
