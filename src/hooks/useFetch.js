import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({
		loading: true,
		data: null,
	});

	useEffect(() => {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setState({
					loading: false,
					data: data,
				});
			});
	}, [url]);

	return state;
};
