import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from ".."


interface IParams{
    page?: string

}

export const useMovie = () => {
    const queryClient = useQueryClient();

    const getMovies = (params?: IParams) => useQuery({
        queryKey: ["movie-key",params],
        queryFn: ()=> 
            api
                .get("exam",{
                    params:{...params}
                })
                .then(res => res.data)
    })
      const deleteStudent = useMutation({
    mutationFn: (id: string | number) => api.delete(`exam/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movie-key"] });
    },
  });



    return {getMovies,deleteStudent}
}