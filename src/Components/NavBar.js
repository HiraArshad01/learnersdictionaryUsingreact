import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import MainHome from '../Screens/MainHome';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Person2Icon from '@mui/icons-material/Person2';

export default function NavBar() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
  <div>
    <div style={{display:'flex', flex: 1, backgroundColor:"orange", flexDirection:'row', boxShadow: '1px 2px 9px #F4AAB9'}}>
      <div style={{display:'flex',flex: 0.90}}>
        <Link style={{marginLeft: '10px'}}><h4>Dictionary</h4></Link>
        <Link style={{marginLeft: '10px'}}><h4>Translation</h4></Link>
        <Link style={{marginLeft: '10px'}}><h4>Dictionary</h4></Link>
      </div>
  

      <div style={{display:'flex',flex: 0.10}}>
      <Button
        id="basic-button"
      >
       <HomeIcon style={{color:'black'}}/>
      </Button>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <Person2Icon style={{color:'black'}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </div>
   
    </div>

  </div>
  );
}