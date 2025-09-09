import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import Dashboard from "./pages/dashboard/Dashboard";
import WaterDashboard from "./pages/dashboard/WaterDashboard";
import SoilDashboard from "./pages/dashboard/SoilDashboard";
import HealthDashboard from "./pages/dashboard/HealthDashboard";
import CourseAI from "./pages/dashboard/CourseAI";
import WeatherDashboard from "./pages/dashboard/WeatherDashboard";
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { DashboardLayout } from './components/DashboardLayout';
import { Toaster as Sonner } from "./components/ui/sonner";

const queryClient = new QueryClient();

const DashboardContainer = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="village-hub-theme">
        <TooltipProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              
              <Route path="/dashboard" element={<DashboardContainer />}>
                <Route index element={<Dashboard />} />
                <Route path="crop-health" element={<HealthDashboard />} />
                <Route path="soil" element={<SoilDashboard />} />
                <Route path="water" element={<WaterDashboard />} />
                <Route path="weather" element={<WeatherDashboard />} />
                <Route path="learning" element={<CourseAI />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
