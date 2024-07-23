import {useState, useEffect} from 'react';

// Custom hooks

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //Refactoring
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    //Loading
    const [loading, setLoading] = useState(false);
    

    const httpConfig = (data, method) => {
        if (method === "POST") {

            setConfig({
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
      
            setMethod(method);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url, callFetch]);

    // Refactoring post

    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading };
};