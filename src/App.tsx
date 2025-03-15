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

  return (
    <>
      <h1>Jaipur</h1>
      <TokenSidebar tokenRows={tokensRemaining} />
    </>
  )
}

export default App
