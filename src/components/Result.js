import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   results: {
      '&:hover': {
         backgroundColor: 'yellow',
         fontWeight: 'bold',
      },
   },
   cards: {
      paddingBottom: 15,
   },
});

const Result = (props) => {
   const classes = useStyles();

   const keyWord = props.keyWord && props.keyWord;
   const value = props.value && props.value;

   if (value.includes('(adj)')) {
      return (
         // <Grid item className={classes.cards} xs={6}>
         <Grid item xs={2} sm={4} md={4}>
            <Card raised={true} style={{ backgroundColor: 'lightcyan' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value.split('(adj)').map((adj) => (
                     <Typography className={classes.results}>{adj}</Typography>
                  ))}
               </CardContent>
            </Card>
         </Grid>
      );
   }
   if (value.includes('(adv)')) {
      return (
         // <Grid item className={classes.cards} xs={6}>
         <Grid item xs={2} sm={4} md={4}>
            <Card raised={true} style={{ backgroundColor: 'lightpink' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value.split('(adv)').map((adv) => (
                     <Typography className={classes.results}>{adv}</Typography>
                  ))}
               </CardContent>
            </Card>
         </Grid>
      );
   }
   if (value.includes('(nou)')) {
      return (
         // <Grid item className={classes.cards} xs={6}>
         <Grid item xs={2} sm={4} md={4}>
            <Card raised={true} style={{ backgroundColor: 'lightgreen' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value.split('(nou)').map((nou) => (
                     <Typography className={classes.results}>{nou}</Typography>
                  ))}
               </CardContent>
            </Card>
         </Grid>
      );
   }
   if (value.includes('(vrb)')) {
      return (
         // <Grid item className={classes.cards} xs={6}>
         <Grid item xs={2} sm={4} md={4}>
            <Card raised={true} style={{ backgroundColor: 'lightsalmon' }}>
               <CardHeader title={keyWord} />
               <CardContent>
                  {value.split('(vrb)').map((vrb) => (
                     <Typography className={classes.results}>{vrb}</Typography>
                  ))}
               </CardContent>
            </Card>
         </Grid>
      );
   }
};

export default Result;
