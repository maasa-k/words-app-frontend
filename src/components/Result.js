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
         <div className='result-card'>
            <Card raised={true} style={{ backgroundColor: 'lightcyan' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value.split('(adj)').map((adj) => (
                     <Typography>{adj}</Typography>
                  ))}
               </CardContent>
            </Card>
         </div>
      );
   }
   if (value.includes('(adv)')) {
      return (
         <div className='result-card'>
            <Card raised={true} style={{ backgroundColor: 'lightpink' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value.split('(adv)').map((adv) => (
                     <Typography>{adv}</Typography>
                  ))}
               </CardContent>
            </Card>
         </div>
      );
   }
   if (value.includes('(nou)')) {
      return (
         <div className='result-card'>
            <Card raised={true} style={{ backgroundColor: 'lightgreen' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value.split('(nou)').map((nou) => (
                     <Typography>{nou}</Typography>
                  ))}
               </CardContent>
            </Card>
         </div>
      );
   }
   if (value.includes('(vrb)')) {
      return (
         <div className='result-card'>
            <Card raised={true} style={{ backgroundColor: 'lightgoldenrodyellow' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value.split('(vrb)').map((vrb) => (
                     <Typography>{vrb}</Typography>
                  ))}
               </CardContent>
            </Card>
         </div>
      );
   }
};

export default Result;
