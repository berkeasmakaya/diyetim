import axios from "axios"
import { useState, useEffect } from "react"
import Config from "react-native-config";


const useFetch = (food) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] =useState(null);
    const apiId = Config.API_ID;
    const apiKey = Config.API_KEY;
    const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${apiId}&app_key=%20${apiKey}&ingr=${food}&nutrition-type=cooking`

    const fetchData = async () => {
        if (!food) {
            return;
        }
        try {
            const {data:responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false);
        }
    }
    

    useEffect(() => {
      fetchData();
    }, [food])
    

    return {data, error, loading}
}

export default useFetch;