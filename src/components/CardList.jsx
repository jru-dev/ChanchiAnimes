import Card from './Card';

const CardList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="text-center">No animes to display</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {items.map((item, index) => (
        <Card key={item.cca3 || index} item={item} />
      ))}
    </div>
  );
};

export default CardList;