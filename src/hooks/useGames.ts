import { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const getAllGames = async () => {
      try {
        const response = await apiClient.get<FetchGameResponse>("/games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      }
    };
    getAllGames();
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
