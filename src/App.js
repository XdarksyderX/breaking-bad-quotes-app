import React, { useState } from 'react';

import { Quote } from './components/Quote';
import { useFetch } from './hooks/useFetch';




export const App = () => {

	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes`);
    
    const [randomIndex, setRandomIndex] = useState(0);

    const handleClick = () => {
        setRandomIndex(Math.floor(Math.random() * data.length))
    }


	return (
		<div className="app">
			{loading ? <p>Loading...</p> : <Quote randomNumber={randomIndex} data={data} />}
            <button onClick={handleClick} >Random</button>
		</div>
	);
};
