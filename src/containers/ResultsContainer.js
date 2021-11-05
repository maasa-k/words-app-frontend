import React from 'react';
import Results from '../components/Results';
import ExampleButton from '../components/ExampleButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const ResultsContainer = (props) => {
   const word = props.word && props.word;

   const resultCode = props.results.result_code;
   const results = props.results && props.results;

   if (resultCode === '200') {
      return (
         <Container>
            <Typography component='h3' style={{ fontSize: 35, color: 'green' }}>
               {word}
            </Typography>
            <br />
            <Results results={results} />
            <br />
            <ExampleButton word={word} />
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
            <Typography component='h3' style={{ fontSize: 35, color: 'green' }}>
               {word}
            </Typography>
            <br />
            <Alert severity='error'>NO DEFINITION FOUND PLEASE TRY AGAIN</Alert>
         </Container>
      );
   }
};

export default ResultsContainer;
