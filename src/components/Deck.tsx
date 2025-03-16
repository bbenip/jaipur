type DeckProps = {
  deck: string[];
};

const Deck = ({ deck }: DeckProps) => (
  <div>
    <h2>Deck</h2>

    <div>
      {deck.map((resource, index) => (
        <div key={index}>
          <img
            src={`/src/assets/cards/${resource}_card.png`}
            alt={resource}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Deck;
