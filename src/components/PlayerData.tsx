import TokenSidebar from "./TokenSidebar";
import PlayerResourceCards from "./PlayerResourceCards";

type PlayerDataProps = {
  player: {
    name: string;
    isMainPlayer: boolean;
    resources: string[];
    tokens: {
      name: string;
      values: number[];
    }[];
  };
};

const PlayerData = ({ player }: PlayerDataProps) => (
  <div>
    <h2>{player.name}</h2>
    <PlayerResourceCards resources={player.resources} isMainPlayer={player.isMainPlayer} />
    <TokenSidebar tokenRows={player.tokens} />
  </div>
);

export default PlayerData;
