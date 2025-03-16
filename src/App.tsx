import { useState } from "react";

import { Deck } from "./components/Deck";
import { DiscardPile } from "./components/DiscardPile";
import { Market } from "./components/Market";
import { Player, PlayerData } from "./components/PlayerData";
import { Token } from "./components/TokenBar";
import { TokenSidebar } from "./components/TokenSidebar";

export const App = () => {
  const [tokensRemaining] = useState<Token[]>([
    { name: 'diamond', values: [5, 5, 5, 7, 7] },
    { name: 'gold', values: [5, 5, 5, 6, 6] },
    { name: 'silver', values: [5, 5, 5, 5, 5] },
    { name: 'cloth', values: [1, 1, 2, 2, 3, 3, 5] },
    { name: 'spice', values: [1, 1, 2, 2, 3, 3, 5] },
    { name: 'leather', values: [1, 1, 1, 1, 1, 1, 2, 3, 4] },
  ]);

  const [player1] = useState<Player>({
    name: 'Player 1',
    isMainPlayer: true,
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

  const [player2] = useState<Player>({
    name: 'Player 2',
    isMainPlayer: false,
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

  const [deck] = useState<string[]>([
    ...Array(6).fill('diamond'),
    ...Array(6).fill('gold'),
    ...Array(6).fill('silver'),
    ...Array(8).fill('cloth'),
    ...Array(8).fill('spice'),
    ...Array(10).fill('leather'),
    ...Array(11).fill('camel'),
  ]);

  // Fisher-Yates shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  const [market] = useState<{ resources: string[] }>({ resources: [] });
  const [discardPile] = useState<{ resources: string[] }>({ resources: [] });

  return (
    <>
      <h1>Jaipur</h1>

      <TokenSidebar tokens={tokensRemaining} />
      <PlayerData player={player1} />
      <PlayerData player={player2} />
      <Deck deck={deck} />
      <Market market={market} />
      <DiscardPile discardPile={discardPile} />
    </>
  );
};
