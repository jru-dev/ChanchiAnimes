const Card = ({ item }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          style={{ height: '250px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>

          <p className="card-text mb-1">
            <strong>Tipo:</strong> {item.type || 'N/A'}
          </p>

          <p className="card-text mb-1">
            <strong>Episodios:</strong> {item.episodes ?? 'N/A'}
          </p>

          <p className="card-text mb-1">
            <strong>Score:</strong> {item.score ?? 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
