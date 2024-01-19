// Adminpanel.jsx
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Topbar from './Topbar/Topbar';
import { ColorModeContext, useMode } from "../../src/theme";
import { ThemeProvider } from '@mui/material/styles';

const Adminpanel = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  const [theme, colorMode] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <div className="flex h-screen w-screen bg-slate-200">
        <Navbar />

        <div className="flex flex-col w-full overflow-hiddenj">
          <Topbar toggleColorMode={toggleColorMode} />

          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Adminpanel;
