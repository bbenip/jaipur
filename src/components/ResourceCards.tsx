
type ResourceCardsProps = {
  resources: string[];
};

const ResourceCards = ({ resources }: ResourceCardsProps) => (
  <div>
    {resources.map((resource, index) => <div key={index}>{resource}</div>)}
  </div>
);

export default ResourceCards;
