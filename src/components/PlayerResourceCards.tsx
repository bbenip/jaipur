
type PlayerResourceCardsProps = {
  resources: string[];
};

const PlayerResourceCards = ({ resources }: PlayerResourceCardsProps) => (
  <div>
    {resources.map((resource, index) => <div key={index}>{resource}</div>)}
  </div>
);

export default PlayerResourceCards;
