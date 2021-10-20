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
      <div>
         {Object.entries(meaningObj).map(([key, value]) => {
            return (
               <Grid container>
                  <Grid item>
                     <Result keyWord={key} value={value} />
                  </Grid>
               </Grid>
            );
         })}
      </div>
   );
};

export default Results;
