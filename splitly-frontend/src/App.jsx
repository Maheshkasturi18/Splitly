import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import About from "./pages/about";
import Privacy from "./pages/privacyPolicy";
import Terms from "./pages/terms";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import AuthenticationForm from "./pages/login";
import Dashboard from "./pages/dashboard";
import SampleDashboard from "./pages/sampleDash";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<AuthenticationForm />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sampleDash" element={<SampleDashboard />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
