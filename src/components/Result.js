import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Result = (props) => {
   const keyWord = props.keyWord && props.keyWord;
   const value = props.value && props.value;

   if (value.includes('(adj)')) {
      return (
         <Card raised={true}>
            <CardHeader title={keyWord} />
            <CardContent>
               {value.split('(adj)').map((adj) => (
                  <Typography>{adj}</Typography>
               ))}
            </CardContent>
         </Card>
      );
   }
   if (value.includes('(adv)')) {
      return (
         <Card raised={true}>
            <CardHeader title={keyWord} />
            <CardContent>
               {value.split('(adv)').map((adv) => (
                  <Typography>{adv}</Typography>
               ))}
            </CardContent>
         </Card>
      );
   }
   if (value.includes('(nou)')) {
      return (
         <Card raised={true}>
            <CardHeader title={keyWord} />
            <CardContent>
               {value.split('(nou)').map((nou) => (
                  <Typography>{nou}</Typography>
               ))}
            </CardContent>
         </Card>
      );
   }
   if (value.includes('(vrb)')) {
      return (
         <Card raised={true}>
            <CardHeader title={keyWord} />
            <CardContent>
               {value.split('(vrb)').map((vrb) => (
                  <Typography>{vrb}</Typography>
               ))}
            </CardContent>
         </Card>
      );
   }
};

export default Result;
