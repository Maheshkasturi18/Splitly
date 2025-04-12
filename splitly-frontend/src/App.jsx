import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import Header from "./components/header";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Header />
      </MantineProvider>
    </>
  );
}

export default App;
