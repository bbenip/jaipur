import TokenSidebar from "./TokenSidebar";

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
    <TokenSidebar tokenRows={player.tokens} />
  </div>
);

export default PlayerData;
