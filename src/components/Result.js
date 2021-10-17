import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Result = (props) => {
    return (
        <Container maxWidth='sm'>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Typography variant='h4'>Noun: {props.noun}</Typography>
                <Typography variant='h4'>Verb: {props.verb}</Typography>
                <Typography variant='h4'>Adverb: {props.adverb}</Typography>
                <Typography variant='h4'>Adjective: {props.adjective}</Typography>
            </Box>
        </Container>
    );
};

export default Result;
