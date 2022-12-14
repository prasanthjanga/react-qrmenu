import "./App.css";
import { Routes, Route } from "react-router-dom";
import ColorContextProvider from "./context/ColorContext";

import AppBarHeader from "./layouts/AppBarHeader";

import Container from "@mui/material/Container";
import AppBarFooter from "./layouts/AppBarFooter";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Notifications } from "./pages/Notifications";

function App() {
  return (
    <>
      <ColorContextProvider>
        <Container fixed>
          <AppBarHeader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notifications" element={<Notifications />} />
          </Routes>

        </Container>
        <AppBarFooter />
      </ColorContextProvider>
    </>
  );
}

export default App;
