import axios from "axios";
import { useEffect, useState } from "react";
import { getUsername } from '../helper/helper'


/** custom hook */
export default function useFetch(query:any){
    const [getData, setData] = useState({ isLoading : false, apiData: undefined, status: null, serverError: null })

    useEffect(() => {

        const fetchData = async () => { 
            try {
                setData(prev => ({ ...prev, isLoading: true}));

                const { username }:any = !query ? await getUsername() : '';
                
                // const { data, status } = await axios.get(`http://localhost:5000/api/${query}`);
                const { data, status } = !query ? await axios.get(`http://localhost:5000/api/user/${username}`) : await axios.get(`http://localhost:5000/api/${query}`);

                if(status === 201){
                    setData(prev => ({ ...prev, isLoading: false}));
                    setData((prev:any) => ({ ...prev, apiData : data, status: status }));
                }

                setData(prev => ({ ...prev, isLoading: false}));
            } catch (error) {
                setData((prev:any) => ({ ...prev, isLoading: false, serverError: error }))
            }
        };
        fetchData()

    }, [query]);

    return [getData, setData];
}