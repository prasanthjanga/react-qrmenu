import './App.css';
import { Routes, Route } from "react-router-dom";
import ColorContextProvider from './context/ColorContext';
import { ToggleColorMode } from './components/ToggleColorMode';

function App() {
  return (
    <>
      <h1>Welcome to My App!</h1>
      <ColorContextProvider>
        <ToggleColorMode />
      </ColorContextProvider>
    </>
  );
}

export default App;
