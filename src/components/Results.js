import React from 'react';
import Container from '@mui/material/Container';
import Result from './Result';
import { Box } from '@mui/system';

const Results = (props) => {
   const results = props.results && props.results.meaning;
   const meaningObj = {};

   if (results.adjective) {
      meaningObj['adjective'] = results.adjective;
   }
   if (results.adverb) {
      meaningObj['adverb'] = results.adverb;
   }
   if (results.noun) {
      meaningObj['noun'] = results.noun;
   }
   if (results.verb) {
      meaningObj['verb'] = results.verb;
   }

   return (
      <Container>
         {Object.entries(meaningObj).map(([key, value]) => {
            return (
               <Container style={{ textAlign: 'justify' }} key={key}>
                  {key}: {value}
                  <br />
               </Container>
            );
         })}
      </Container>
   );
};

export default Results;

//  <Box sx={{ textAlign: 'left' }}>
//     <Typography variant='p' component='h4'>
//        Noun: {props.noun}
//     </Typography>
//  </Box>
//  <br />
//  <Box sx={{ textAlign: 'left' }}>
//     <Typography variant='p' component='h4'>
//        Verb: {props.verb}
//     </Typography>
//  </Box>
//  <br />
//  <Box sx={{ textAlign: 'left' }}>
//     <Typography variant='p' component='h4'>
//        Adverb: {props.adverb}
//     </Typography>
//  </Box>
//  <br />
//  <Box sx={{ textAlign: 'left' }}>
//     <Typography variant='p' component='h4'>
//        Adjective: {props.adjective}
//     </Typography>
//  </Box>
