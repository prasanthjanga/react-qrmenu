import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { ColorContext } from '../context/ColorContext';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ToggleColorMode = () => {
    const { themeMode, themeModeChange } = useContext(ColorContext);

    const colorMode = () => {
        themeModeChange((prevthemeMode) => (prevthemeMode === 'light' ? 'dark' : 'light'));
    }

    return (
        <>
            {themeMode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode} color="inherit">
                {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
      </>
    )

}