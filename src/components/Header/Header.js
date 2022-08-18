import React  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SideBar from './SideBar';
const Header = () => {  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div id="outer-container">
              <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , textAlign: "center"}} >
            読書管理
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
