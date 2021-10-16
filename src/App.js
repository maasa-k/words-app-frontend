import React, { useState } from 'react';
import './App.css';
import WordForm from './components/WordForm';
import Results from './containers/Results';
import Typography from '@mui/material/Typography';

const App = () => {
    const [word, setWord] = useState('');
    const [results, setResults] = useState('');

    const getWord = (word) => {
        setWord(word);
    };

    const getResults = (results) => {
        setResults(results);
    };

    return (
        <div className='App'>
            <Typography variant='h1'>Learn the Word</Typography>
            <br />

            <WordForm getWord={getWord} getResults={getResults} />
            <br />
            <br />
            <Results word={word} results={results} />
        </div>
    );
};

export default App;
