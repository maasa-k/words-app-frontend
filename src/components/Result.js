import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   results: {
      '&:hover': {
         backgroundColor: 'yellow',
         fontWeight: 'bold',
      },
   },
});

const Result = (props) => {
   const classes = useStyles();

   const keyWord = props.keyWord && props.keyWord;
   const value = props.value && props.value;

   if (value.includes('(adj)')) {
      return (
         <div className='result-card'>
            <Card raised={true} style={{ backgroundColor: 'lightcyan' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value
                     .split('(adj)')
                     .slice(1, -1)
                     .map((adj) => (
                        <Typography className={classes.results}>{adj}</Typography>
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
                  {value
                     .split('(adv)')
                     .slice(1, -1)
                     .map((adv) => (
                        <Typography className={classes.results}>{adv}</Typography>
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
                  {value
                     .split('(nou)')
                     .slice(1, -1)
                     .map((nou) => (
                        <Typography className={classes.results}>{nou}</Typography>
                     ))}
               </CardContent>
            </Card>
         </div>
      );
   }
   if (value.includes('(vrb)')) {
      return (
         <div className='result-card'>
            <Card raised={true} style={{ backgroundColor: 'lightsalmon' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value
                     .split('(vrb)')
                     .slice(1, -1)
                     .map((vrb) => (
                        <Typography className={classes.results}>{vrb}</Typography>
                     ))}
               </CardContent>
            </Card>
         </div>
      );
   }
};

export default Result;
