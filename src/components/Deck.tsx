type DeckProps = {
  resources: string[];
};

export const Deck = ({ resources }: DeckProps) => (
  <div>
    <h2>Deck</h2>

    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      {resources.map((resource, index) => (
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
            src={`/src/assets/cards/back_card.png`}
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
  </div>
);
