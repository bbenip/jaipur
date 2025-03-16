import { TokenSidebar } from "./TokenSidebar";
import { PlayerResourceCards } from "./PlayerResourceCards";
import { Token } from "./TokenBar";

export type Player = {
  name: string;
  isMainPlayer: boolean;
  resources: string[];
  tokens: Token[];
};

type PlayerDataProps = {
  player: Player;
};

export const PlayerData = ({ player }: PlayerDataProps) => (
  <div>
    <h2>{player.name}</h2>
    <PlayerResourceCards player={player} />
    <TokenSidebar tokens={player.tokens} />
  </div>
);
