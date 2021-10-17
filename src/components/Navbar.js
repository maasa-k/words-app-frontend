import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
   return (
      <div>
         <AppBar position='static'>
            <Toolbar>
               <Typography>Learn the Word</Typography>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Navbar;
