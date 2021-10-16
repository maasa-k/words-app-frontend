import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const WordForm = (props) => {
    const [word, setWord] = useState('');

    const handleChange = (e) => {
        setWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${word}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
            },
        })
            .then((response) => response.json())
            .then((results) => props.getResults(results))
            .catch((err) => {
                console.error(err);
            })
            .then(props.getWord(word));
        setWord('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input fullWidth placeholder='Type in word here' value={word} name={word} onChange={handleChange} />
                <br />
                <br />
                <Button type='submit'>Find Definition</Button>
            </form>
        </div>
    );
};

export default WordForm;
