import React from 'react';
import Container from '@mui/material/Container';
import Result from './Result';

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
               <Result keyWord={key} value={value} />
               // <Container style={{ textAlign: 'justify' }} key={key}>
               //    {key}: {value}
               //    <br />
               //    <br />
               // </Container>
            );
         })}
      </Container>
   );
};

export default Results;
