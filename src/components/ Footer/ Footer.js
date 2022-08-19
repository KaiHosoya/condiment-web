import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Twitter } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';
import { LocationOnOutlined } from "@mui/icons-material";
import "./Footer.css"

const Footer = () => {
return (
<BottomNavigation className="footer" style={{backgroundColor: "80d5ff"}}>
  <h3 className="footer-left">
    Chaichai
  </h3>
  <div className="footer-right">
    <BottomNavigationAction href="https://twitter.com/chaichai_1551" label="Recents" icon={<Twitter />} />
    <BottomNavigationAction label="Favorites" icon={<ShareIcon />} />
    <BottomNavigationAction label="Nearby" icon={<LocationOnOutlined />} />
  </div>
</BottomNavigation>
)
}

export default Footer;
