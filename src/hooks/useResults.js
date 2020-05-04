import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [err, setErr] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'new york city',
                },
            });
            setResults(response.data.businesses);
        } catch (e) {
            setErr('Something went wrong, try again later!');
        }
    };
    useEffect(() => {
        searchApi('food');
    }, []);
    return [searchApi, results, err];
};
