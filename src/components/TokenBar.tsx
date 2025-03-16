export type Token = {
  name: string;
  values: number[];
};

type TokenBarProps = {
  token: Token;
};

export const TokenBar = ({ token }: TokenBarProps) => {
  const tokenName = token.name;
  const tokenValues = token.values;

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {tokenValues.map((value, index) => (
        <div
          key={index}
          style={{
            marginLeft: index === 0 ? 0 : '-6vh',
            position: 'relative',
            zIndex: index,
          }}
        >
          <img
            src={`/src/assets/resource_tokens/${tokenName}_token_${value}.webp`}
            alt={`${tokenName}-${value}`}
            style={{ height: '8vh', width: '8vh' }}
          />
        </div>
      ))}
    </div>
  );
};
