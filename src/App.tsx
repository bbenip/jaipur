import { useState } from "react";

import { Deck } from "./components/Deck";
import { DiscardPile } from "./components/DiscardPile";
import { Market } from "./components/Market";
import { Player, PlayerData } from "./components/PlayerData";
import { Token } from "./components/TokenBar";
import { TokenSidebar } from "./components/TokenSidebar";

export const App = () => {
  const [isPlayer1Turn, setIsPlayer1Turn] = useState<boolean>(true);

  const [tokensRemaining] = useState<Token[]>([
    { name: 'diamond', values: [5, 5, 5, 7, 7] },
    { name: 'gold', values: [5, 5, 5, 6, 6] },
    { name: 'silver', values: [5, 5, 5, 5, 5] },
    { name: 'cloth', values: [1, 1, 2, 2, 3, 3, 5] },
    { name: 'spice', values: [1, 1, 2, 2, 3, 3, 5] },
    { name: 'leather', values: [1, 1, 1, 1, 1, 1, 2, 3, 4] },
  ]);

  const [player1, setPlayer1] = useState<Player>({
    name: 'Player 1',
    isMainPlayer: isPlayer1Turn,
    resources: [],
    tokens: [
      { name: 'diamond', values: [] },
      { name: 'gold', values: [] },
      { name: 'silver', values: [] },
      { name: 'cloth', values: [] },
      { name: 'spice', values: [] },
      { name: 'leather', values: [] },
    ],
  });

  const [player2, setPlayer2] = useState<Player>({
    name: 'Player 2',
    isMainPlayer: !isPlayer1Turn,
    resources: [],
    tokens: [
      { name: 'diamond', values: [] },
      { name: 'gold', values: [] },
      { name: 'silver', values: [] },
      { name: 'cloth', values: [] },
      { name: 'spice', values: [] },
      { name: 'leather', values: [] },
    ],
  });

  const [resourceDeck, setResourceDeck] = useState<string[]>([
    ...Array(6).fill('diamond'),
    ...Array(6).fill('gold'),
    ...Array(6).fill('silver'),
    ...Array(8).fill('cloth'),
    ...Array(8).fill('spice'),
    ...Array(10).fill('leather'),
    ...Array(11).fill('camel'),
  ]);

  // Fisher-Yates shuffle
  for (let i = resourceDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resourceDeck[i], resourceDeck[j]] = [resourceDeck[j], resourceDeck[i]];
  }

  const [market] = useState<{ resources: string[] }>({ resources: [] });
  const [discardPile] = useState<{ resources: string[] }>({ resources: [] });

  const toggleTurn = () => {
    setIsPlayer1Turn((currentValue) => !currentValue);
  };

  const addResourceToPlayer = (
    setPlayer: React.Dispatch<React.SetStateAction<Player>>,
    resource: string,
  ) => {
    setPlayer((currentPlayer: Player) => ({
      ...currentPlayer,
      resources: [...currentPlayer.resources, resource],
    }));
  };

  const removeResourceFromDeck = () => {
    setResourceDeck((currentDeck) => currentDeck.slice(0, -1));
  };

  const takeResourceFromDeck = () => {
    if (resourceDeck.length === 0) {
      return;
    }

    const setPlayer = isPlayer1Turn ? setPlayer1 : setPlayer2;
    const resource = resourceDeck[resourceDeck.length - 1];

    addResourceToPlayer(setPlayer, resource);
    removeResourceFromDeck();

    toggleTurn();
  };

  return (
    <>
      <h1>Jaipur</h1>

      <TokenSidebar tokens={tokensRemaining} />
      <PlayerData player={player1} />
      <PlayerData player={player2} />
      <Deck resources={resourceDeck} />
      <Market market={market} />
      <DiscardPile discardPile={discardPile} />

      <button onClick={takeResourceFromDeck}>Take resource from deck</button>
    </>
  );
};
