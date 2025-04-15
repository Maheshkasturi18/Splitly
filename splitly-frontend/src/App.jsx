import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
// import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import AuthenticationForm from "./pages/login";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<AuthenticationForm />}></Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
