import React, { useState } from 'react';
import './App.css';
import WordForm from './WordForm';
import Result from './Result';

const App = () => {
    console.log('App.js mounted');
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');

    const getWord = (word) => {
        console.log('getWord called');
        setWord(word);
    };

    const getDefinition = (definition) => {
        console.log('getDefinition called');
        setDefinition(definition);
    };

    return (
        <div className='App'>
            <h1>Learn the Word</h1>
            <br />

            <WordForm getWord={getWord} getDefinition={getDefinition} />
            <br />
            <br />
            <Result word={word} definition={definition} />
        </div>
    );
};

export default App;
