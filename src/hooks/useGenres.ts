import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Genres {
  count: number;
  results: Genre[];
  next: string;
  previous: string;
}

const apiClient = new APIClient<Genres>("/genres");

const useGenres = () => {
  const { data, error, isLoading } = useQuery<Genres, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, // 10 seconds
  });
  return {
    data,
    error,
    isLoading,
  };
};

export default useGenres;
