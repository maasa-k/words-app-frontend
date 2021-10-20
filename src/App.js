import React, { useState } from 'react';
import './App.css';
import ResultsContainer from './containers/ResultsContainer';
import Navbar from './components/Navbar';

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
         <Navbar getWord={getWord} getResults={getResults} />
         <br />
         <br />
         <ResultsContainer word={word} results={results} />
      </div>
   );
};

export default App;
