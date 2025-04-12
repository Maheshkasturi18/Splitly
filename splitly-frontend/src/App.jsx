import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
// import Header from "./components/header";
import Home from "./pages/home";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* <Header /> */}
        <Home />
      </MantineProvider>
    </>
  );
}

export default App;
