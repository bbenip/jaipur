type PlayerResourceCardsProps = {
  resources: string[];
};

const PlayerResourceCards = ({ resources }: PlayerResourceCardsProps) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    {resources.map((resource, index) => (
      <div
        key={index}
            style={{
              marginLeft: index === 0 ? 0 : '-9vh',
              marginTop: index % 2 === 0 ? 0 : '-0.9vh',
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
            boxShadow: '1px 2px 1px 1px rgba(0,0,0,0.5)',
          }}
        />
      </div>
    ))}
  </div>
);

export default PlayerResourceCards;
