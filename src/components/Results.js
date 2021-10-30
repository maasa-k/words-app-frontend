import React from 'react';
import Result from './Result';
import Grid from '@mui/material/Grid';

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
      <Grid container spacing={2}>
         {/* <Grid container direction='row' justifyContent='center' alignItems='stretch'> */}
         {/* <div> */}
         {Object.entries(meaningObj).map(([key, value]) => {
            return <Result keyWord={key} value={value} />;
         })}
         {/* </div> */}
      </Grid>
   );
};

export default Results;
