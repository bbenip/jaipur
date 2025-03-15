type TokenBarProps = {
  tokenRow: { name: string; quantities: number[] };
};

const TokenBar = ({ tokenRow }: TokenBarProps) => {
  const tokenName = tokenRow.name;
  const tokenQuantities = tokenRow.quantities;

  return (
    <div>
      {tokenQuantities.map((quantity, index) => (
        <div key={index}>
          {tokenName}: {quantity}
        </div>
      ))}
    </div>
  );
};

export default TokenBar;
