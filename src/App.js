import React, { useState } from 'react';
import './App.css';
import WordForm from './WordForm';
import Result from './Result';

function App() {
	const [definition, setDefinition] = useState('')
	
	const getDefinition = (definition) => {
		setDefinition(definition[0].definitions)
	};

	return (
		<div className='App'>
			<h1>Learn the Word</h1>
			<WordForm getDefinition={getDefinition} />
			<br />
			<Result definition={definition} />
		</div>
	);
}

export default App;
