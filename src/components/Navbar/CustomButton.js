import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";


export default function CustomButton({openLogin}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const token =localStorage.getItem('token');
  const handleClick = (event) => {
      if(token){
        setAnchorEl(event.currentTarget);
      }else{
          openLogin()
      }
    
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
      localStorage.clear()
      setAnchorEl(null);
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ borderRadius: "50%" }}
      >
         <PersonIcon sx={{ fontSize: 38, fontWeight: "bold" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
