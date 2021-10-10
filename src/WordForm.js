import React, { useState } from 'react';

const WordForm = () => {
	const [word, setWord] = useState('');

	const handleChange = (e) => {
		setWord(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((res) => res.json())
			.then((definition) => console.log(definition));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Type in word here' value={word} onChange={handleChange} />
				<br />
				<br />
				<button type='submit'>Find Definition</button>
			</form>
		</div>
	);
};

export default WordForm;
