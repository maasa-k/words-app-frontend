import React from 'react';
import Result from '../components/Result';
import Container from '@mui/material/Container';
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
         <Container>
            <Typography component='h3' style={{ fontSize: 30 }}>
               {word}
            </Typography>
            <br />
            <br />
            <Result noun={noun} verb={verb} adverb={adverb} adjective={adjective} />
         </Container>
      );
   } else if (!resultCode) {
      return (
         <Container>
            <Alert severity='info'>START LEARNING BY ENTERING A WORD ABOVE</Alert>
         </Container>
      );
   } else {
      return (
         <Container>
            <Typography component='h3' style={{ fontSize: 30 }}>
               {word}
            </Typography>
            <br />
            <Alert severity='error'>NO DEFINITION FOUND PLEASE TRY AGAIN</Alert>
         </Container>
      );
   }
};

export default Results;
