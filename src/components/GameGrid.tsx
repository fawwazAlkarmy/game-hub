import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import { AxiosError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAllGames = async () => {
      try {
        const response = await apiClient.get<FetchGameResponse>("/games");
        setGames(response.data.results);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    getAllGames();
  }, []);

  return (
    <div>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <h4 key={game.id}>{game.name}</h4>
      ))}
    </div>
  );
};
export default GameGrid;
