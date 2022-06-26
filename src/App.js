import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppBar from './components/layouts/AppBar';
import DrawerMenu from './components/layouts/DrawerMenu';
import Map from './components/Map';

const darkTheme = createTheme({
	palette: {
	  mode: 'dark',
	},
  });

function App() {
  return (
    <div className="App">
		<ThemeProvider theme={darkTheme}>
			<Box sx={{ display: 'flex' }}>
					<CssBaseline />
					{/* <AppBar /> */}
					<DrawerMenu />
					<Box
						component="main"
						sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
					>
					{/* <Toolbar /> */}
					<Map />
					</Box>
			</Box>
		</ThemeProvider>
    </div>
  );
}

export default App;
