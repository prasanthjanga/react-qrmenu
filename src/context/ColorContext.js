import React, { createContext } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import { ThemeDark, ThemeLight } from '../theme/ThemePalette';

export const ColorContext = createContext(null);

const ColorContextProvider = (props) =>
{
    const [themeMode, setThemeMode] = React.useState('light');

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