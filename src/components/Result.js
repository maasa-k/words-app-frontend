import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Result = (props) => {
   const keyWord = props.keyWord && props.keyWord;
   const value = props.value && props.value;

   return (
      <div>
         <Card elevation={3}>
            <CardHeader title={keyWord} />
            <CardContent>
               <Typography variant='body2'>{value}</Typography>
            </CardContent>
         </Card>
         <br />
      </div>
   );
};

export default Result;
