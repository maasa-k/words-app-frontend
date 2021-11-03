import React from 'react';
import Result from './Result';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* <Grid container spacing={2}> */}
            {/* <Grid container direction='row' justifyContent='center' alignItems='stretch'> */}
            {/* <div> */}
            {Object.entries(meaningObj).map(([key, value]) => {
               return <Result keyWord={key} value={value} />;
            })}
            {/* </div> */}
         </Grid>
      </Box>
   );
};

export default Results;
