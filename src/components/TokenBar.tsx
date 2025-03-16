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
          <img
            src={`/src/assets/resource_tokens/${tokenName}_token_${quantity}.webp`}
            alt={`${tokenName}-${quantity}`}
          />
        </div>
      ))}
    </div>
  );
};

export default TokenBar;
