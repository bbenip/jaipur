type DiscardPileProps = {
  discardPile: {
    resources: string[];
  };
};

const DiscardPile = ({ discardPile }: DiscardPileProps) => {
  return <div>
    <h2>Discard Pile</h2>

    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      {discardPile.resources.map((resource, index) => (
        <div
          key={index}
          style={{
            marginRight: index === 0 ? 0 : '-12.92vh',
            marginTop: index === 0 ? 0 : `-${0.05 * index}vh`,
            position: 'relative',
            zIndex: index,
          }}
        >
          <img
            src={`/src/assets/cards/${resource}_card.png`}
            alt={resource}
            style={{
              borderRadius: '8%',
              height: '18vh',
              boxShadow: '1px 2px 1px 1px rgba(0,0,0,.1)',
            }}
          />
        </div>
      ))}
    </div>
  </div>;
};

export default DiscardPile;
