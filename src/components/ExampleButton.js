import React from 'react';
import Button from '@mui/material/Button';

const ExampleButton = (props) => {
   const handleClick = (e) => {
      e.preventDefault();
      fetch(`https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=${props.word}`, {
         method: 'GET',
         headers: {
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
         },
      })
         .then((response) => response.json())
         .then((examples) => console.log(examples));
      //  .then((results) => props.getResults(results))
      //  .catch((err) => {
      //     console.error(err);
      //  });
   };

   return <Button onClick={handleClick}>CLICK FOR EXAMPLE</Button>;
};

export default ExampleButton;
