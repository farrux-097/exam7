import {  useQuery } from "@tanstack/react-query"
import { api } from ".."


interface IParams{
    page?: string
    with_genres?: string
}

export const useMovie = () => {

    const getMovies = (params?: IParams) => useQuery({
        queryKey: ["movie-key",params],
        queryFn: ()=> 
            api
                .get("exam",{
                    params:{...params}
                })
                .then(res => res.data)
    })



    return {getMovies}
}