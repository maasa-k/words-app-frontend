import React, { useState } from 'react';

const WordForm = () => {
	const [word, setWord] = useState('');

	const handleChange = (e) => {
		setWord(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`https://od-api.oxforddictionaries.com/api/v2/words/en-us/${word}`, {
			method: 'GET',
			headers: {
				app_id: '4ddfaf23',
				app_key: '1c8acbfda45adc010c321ea51bb7ff00',
			},
		})
			.then((res) => res.json())
			.then((def) => console.log(def));
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
