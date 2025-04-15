import axios from "axios"
import { useEffect, useState } from "react";

export const useReleases = () => {
    const [trending, setTrending] = useState<Movie[]>([]);
    const [isDataFetching, setIsDataFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fetchTrending = async () => {
        if (isDataFetching) return
        setIsDataFetching(true)
        try {
            const response = await axios.get("/api/releases");
            setTrending(response.data.titles)
        } catch (err) {
            setError("Failed to fetch data")
        } finally {
            setIsDataFetching(false)
        }
    }
    useEffect(() => {
        fetchTrending()
    }, [])
    return { trending, error, isDataFetching }
}
