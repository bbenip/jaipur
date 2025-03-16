import TokenSidebar from "./TokenSidebar";
import ResourceCards from "./ResourceCards";

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
    <ResourceCards resources={player.resources} />
    <TokenSidebar tokenRows={player.tokens} />
  </div>
);

export default PlayerData;
