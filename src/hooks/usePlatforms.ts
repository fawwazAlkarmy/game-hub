import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Platforms {
  count: number;
  results: Platform[];
  next: string;
  previous: string;
}

const apiClient = new APIClient<Platforms>("/platforms/lists/parents");

const usePlatforms = () => {
  const { data, error, isLoading } = useQuery<Platforms, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default usePlatforms;
