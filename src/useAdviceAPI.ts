import {useCallback, useEffect, useState} from 'react';

const useAdviceAPI = () => {
    const [advice, setAdvice] = useState('');
    const [id, setId] = useState<number | undefined>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAdvice = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://api.adviceslip.com/advice');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setId(data.slip.id);
            setAdvice(data.slip.advice);
            setLoading(false);

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAdvice();
    }, [fetchAdvice]);

    return {id, advice, loading, error, fetchAdvice};
}

export default useAdviceAPI;