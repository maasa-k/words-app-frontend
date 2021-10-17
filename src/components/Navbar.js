import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

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
                  <Input placeholder='Type in word here' value={word} name={word} onChange={handleChange} />
                  <Button color='secondary' type='submit'>
                     Find Definition
                  </Button>
               </form>
            </Toolbar>
         </AppBar>
      </Box>
   );
};

export default Navbar;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// const Navbar = () => {
//    return (
//       <div>
//          <AppBar position='static'>
//             <Toolbar>
//                <Typography>Learn the Word</Typography>
//             </Toolbar>
//          </AppBar>
//       </div>
//    );
// };

// export default Navbar;
