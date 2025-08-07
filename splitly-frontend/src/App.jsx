import { useState } from "react";
import "./App.css";
import About from "./pages/about";
import Privacy from "./pages/privacyPolicy";
import Terms from "./pages/terms";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import RegisterForm from "./pages/register";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
