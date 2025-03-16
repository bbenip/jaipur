import { Player } from "./PlayerData";

type PlayerResourceCardsProps = {
  player: Player;
};

export const PlayerResourceCards = ({ player }: PlayerResourceCardsProps) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    {player.resources.map((resource, index) => {
      const cardImageSource = player.isMainPlayer
        ? `/src/assets/cards/${resource}_card.png`
        : `/src/assets/cards/back_card.png`;

      return (
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
                src={cardImageSource}
                alt={resource}
                style={{
                  borderRadius: '8%',
                height: '18vh',
              boxShadow: '1px 2px 1px 1px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      );
    })}
  </div>
);
