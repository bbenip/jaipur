import TokenSidebar from "./TokenSidebar";
import PlayerResourceCards from "./PlayerResourceCards";

type PlayerDataProps = {
  player: {
    name: string;
    resources: string[];
    tokens: {
      name: string;
      quantities: number[];
    }[];
  };
};

const PlayerData = ({ player }: PlayerDataProps) => (
  <div>
    <h2>{player.name}</h2>
    <PlayerResourceCards resources={player.resources} />
    <TokenSidebar tokenRows={player.tokens} />
  </div>
);

export default PlayerData;
