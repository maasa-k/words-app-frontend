import React from 'react';
import Result from '../components/Result';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const Results = (props) => {
   const word = props.word && props.word;

   const resultCode = props.results.result_code;

   if (resultCode === '200') {
      const noun = props.results && props.results.meaning.noun;
      const verb = props.results && props.results.meaning.verb;
      const adverb = props.results && props.results.meaning.adverb;
      const adjective = props.results && props.results.meaning.adjective;

      return (
         <div>
            <Typography variant='h3'>{word}</Typography>

            <Typography variant='h4'>Definition:</Typography>
            <Result noun={noun} verb={verb} adverb={adverb} adjective={adjective} />
         </div>
      );
   } else if (!resultCode) {
      return (
         <div>
            <Alert severity='info'>PLEASE ENTER A WORD TO LEARN</Alert>
         </div>
      );
   } else {
      return (
         <div>
            <h1>{word}</h1>
            <Alert severity='error'>NO DEFINITION FOUND</Alert>
         </div>
      );
   }
};

export default Results;
