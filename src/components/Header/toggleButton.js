import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
  const toggleButton = (toggleFunction) => {
    return(
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={toggleFunction}
    >
      <MenuIcon />
    </IconButton>
    )
  }

  export default toggleButton