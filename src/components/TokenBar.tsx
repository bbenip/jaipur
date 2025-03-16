type TokenBarProps = {
  tokenRow: { name: string; quantities: number[] };
};

const TokenBar = ({ tokenRow }: TokenBarProps) => {
  const tokenName = tokenRow.name;
  const tokenQuantities = tokenRow.quantities;

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {tokenQuantities.map((quantity, index) => (
        <div
          key={index}
          style={{
            marginLeft: index === 0 ? 0 : '-6vh',
            position: 'relative',
            zIndex: index,
          }}
        >
          <img
            src={`/src/assets/resource_tokens/${tokenName}_token_${quantity}.webp`}
            alt={`${tokenName}-${quantity}`}
            style={{ height: '8vh', width: '8vh' }}
          />
        </div>
      ))}
    </div>
  );
};

export default TokenBar;
