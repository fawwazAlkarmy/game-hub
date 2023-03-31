import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
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
