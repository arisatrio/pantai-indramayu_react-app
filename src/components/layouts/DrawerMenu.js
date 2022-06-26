import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';

export default function DrawerMenu() {
  
  return (
    <Drawer
		sx={{
			width: '340px',
			flexShrink: 0,
			'& .MuiDrawer-paper': {
				width: '340px',
				boxSizing: 'border-box',
			},
		}}
		variant="permanent"
		anchor="left"
	>
		<Typography 
			variant="h5" 
			gutterBottom 
			component="div"
			sx = {{ p: 2  }}
		>
			Dashboard <br /> Pantai Indramayu
		</Typography>
        <Divider />
        
      </Drawer>
  );
}