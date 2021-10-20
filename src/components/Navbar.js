import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
}));

const Navbar = (props) => {
   const [word, setWord] = useState('');

   const handleChange = (e) => {
      setWord(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${word}`, {
         method: 'GET',
         headers: {
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
         },
      })
         .then((response) => response.json())
         .then((results) => props.getResults(results))
         .catch((err) => {
            console.error(err);
         })
         .then(props.getWord(word));
      setWord('');
   };

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position='static'>
            <Toolbar>
               <Typography variant='h6' noWrap component='div' sx={{ textAlign: 'left', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                  Learn the Word
               </Typography>
               <form onSubmit={handleSubmit}>
                  <Search>
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                        placeholder='Type here...'
                        inputProps={{ 'aria-label': 'search' }}
                        value={word}
                        name={word}
                        onChange={handleChange}
                     />
                  </Search>
               </form>
            </Toolbar>
         </AppBar>
      </Box>
   );
};

export default Navbar;
