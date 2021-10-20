import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Result = (props) => {
   // console.log(props);
   const keyWord = props.keyWord && props.keyWord;
   const value = props.value && props.value;

   return (
      <Container style={{ textAlign: 'justify' }} key={keyWord}>
         {keyWord}: {value}
         <br />
         <br />
      </Container>
   );
};

export default Result;
