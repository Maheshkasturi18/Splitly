import { useState } from "react";
import "./App.css";
import About from "./pages/about";
import Privacy from "./pages/privacyPolicy";
import Terms from "./pages/terms";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationForm from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<AuthenticationForm />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
