import "./App.css";
import { Routes, Route } from "react-router-dom";
import ColorContextProvider from "./context/ColorContext";

import AppBarHeader from "./layouts/AppBarHeader";

import Container from "@mui/material/Container";
import AppBarFooter from "./layouts/AppBarFooter";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <ColorContextProvider>
        <Container fixed>
          <AppBarHeader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Routes>

        </Container>
        <AppBarFooter />
      </ColorContextProvider>
    </>
  );
}

export default App;
