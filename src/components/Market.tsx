type MarketProps = {
  market: {
    resources: string[];
  };
};

const Market = ({ market }: MarketProps) => {
  return (
    <div>
      <h2>Market</h2>
      <div>
        {market.resources.map((resource, index) => (
          <div key={index}>{resource}</div>
        ))}
      </div>
    </div>
  );
};

export default Market;
