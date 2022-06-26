import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  

  return (
    <AppBar
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: `240px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
  );
};
export default ResponsiveAppBar;
