import React, { useContext } from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ColorModeContext, tokens } from '../../theme';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    //TODO decrease dependencies such as sx and instead use tailwind css
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 2,
                backgroundColor: colors.primary[400],
                borderRadius: '0px',
            }}
        >
            {/* SEARCH BAR */}
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: '#fff',
                    borderRadius: '3px',
                }}
            >
                <InputBase
                    sx={{
                        ml: 2,
                        flex: 1,
                        color: 'black', // Set text color to black
                    }}
                    placeholder="Search"
                />
                <IconButton
                    type="button"
                    sx={{
                        p: 1,
                        color: 'black', // Set icon color to black
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICONS */}
            {/* TODO inconsistency in hover effect on buttons */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
