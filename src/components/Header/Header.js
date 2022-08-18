import React ,{ useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleButton from "./toggleButton"
 
const Header = () => {  
  const [open, setOpen] = useState(false)

  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ToggleButton
            toggleFunction={toggleFunction}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            読書管理
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
