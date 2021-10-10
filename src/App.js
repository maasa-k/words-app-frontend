import React, { useState } from 'react';
import './App.css';
import WordForm from './WordForm';
import Result from './Result';

const getDefinition = (definition) => {
	console.log(definition)
};

function App() {
	return (
		<div className='App'>
			<h1>Learn the Word</h1>
			<WordForm getDefinition={getDefinition} />
			<br />
			<Result />
		</div>
	);
}

export default App;
