type MarketProps = {
  market: {
    resources: string[];
  };
};

export const Market = ({ market }: MarketProps) => {
  return (
    <div>
      <h2>Market</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5vh' }}>
        {market.resources.map((resource, index) => (
          <div key={index}>
            <img
              src={`/src/assets/cards/${resource}_card.png`}
              alt={resource}
              style={{
                borderRadius: '8%',
                height: '18vh',
                boxShadow: '1px 2px 1px 1px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
