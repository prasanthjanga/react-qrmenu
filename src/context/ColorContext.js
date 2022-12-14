import React, { createContext } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import { ThemeDark, ThemeLight } from '../theme/ThemePalette';
import { useLocalStorage } from "../hooks/useLocalStorage"

export const ColorContext = createContext(null);

const ColorContextProvider = (props) =>
{
    const [themeMode, setThemeMode] = useLocalStorage('light');

    const themeModeChange = (newMode) => {
      setThemeMode(newMode);
    }

    const theme = React.useMemo(
      () =>
        createTheme(
          (themeMode === 'dark')?ThemeDark:ThemeLight
        ),
      [themeMode],
    );

    return(
        <ColorContext.Provider value={{themeMode, themeModeChange}}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </ColorContext.Provider>
    )
}

export default ColorContextProvider;