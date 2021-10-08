import React, { useEffect, useState } from 'react';

const WordForm = () => {
	const [word, setWord] = useState('');

	const handleChange = (e) => {
		setWord(e.target.value);
	};

	console.log(word);

	return (
		<div>
			<form>
				<input type='text' placeholder='Type in word here' value={word} onChange={handleChange} />
				<br />
				<br />
				<button type='submit'>Find Definition</button>
			</form>
		</div>
	);
};

export default WordForm;
