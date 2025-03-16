import PlayerData from "./components/PlayerData";
import TokenSidebar from "./components/TokenSidebar";

const App = () => {
  const tokensRemaining = [
    { name: 'Diamond', quantities: [5, 5, 5, 7, 7] },
    { name: 'Gold', quantities: [5, 5, 5, 6, 6] },
    { name: 'Silver', quantities: [5, 5, 5, 5, 5] },
    { name: 'Cloth', quantities: [1, 1, 2, 2, 3, 3, 5] },
    { name: 'Spice', quantities: [1, 1, 2, 2, 3, 3, 5] },
    { name: 'Leather', quantities: [1, 1, 1, 1, 1, 1, 2, 3, 4] },
  ];

  const player1 = {
    name: 'Player 1',
    resources: [],
    tokens: [
      { name: 'Diamond', quantities: [] },
      { name: 'Gold', quantities: [] },
      { name: 'Silver', quantities: [] },
      { name: 'Cloth', quantities: [] },
      { name: 'Spice', quantities: [] },
      { name: 'Leather', quantities: [] },
    ],
  };

  const player2 = {
    name: 'Player 2',
    resources: [],
    tokens: [
      { name: 'Diamond', quantities: [] },
      { name: 'Gold', quantities: [] },
      { name: 'Silver', quantities: [] },
      { name: 'Cloth', quantities: [] },
      { name: 'Spice', quantities: [] },
      { name: 'Leather', quantities: [] },
    ],
  };

  return (
    <>
      <h1>Jaipur</h1>
      <TokenSidebar tokenRows={tokensRemaining} />
      <PlayerData player={player1} />
      <PlayerData player={player2} />
    </>
  )
}

export default App
