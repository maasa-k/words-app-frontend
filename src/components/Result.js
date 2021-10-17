import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Result = (props) => {
   return (
      <Container maxWidth='lg'>
         <Box sx={{ textAlign: 'left' }}>
            <Typography variant='p' component='h4'>
               Noun: {props.noun}
            </Typography>
         </Box>
         <br />
         <Box sx={{ textAlign: 'left' }}>
            <Typography variant='p' component='h4'>
               Verb: {props.verb}
            </Typography>
         </Box>
         <br />
         <Box sx={{ textAlign: 'left' }}>
            <Typography variant='p' component='h4'>
               Adverb: {props.adverb}
            </Typography>
         </Box>
         <br />
         <Box sx={{ textAlign: 'left' }}>
            <Typography variant='p' component='h4'>
               Adjective: {props.adjective}
            </Typography>
         </Box>
      </Container>
   );
};

export default Result;
