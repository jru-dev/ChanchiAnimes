const Card = ({ item }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={item.flags?.png}
          alt={item.name?.common}
          className="card-img-top"
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name?.common}</h5>
          <p className="card-text mb-1">
            <strong>Capital:</strong> {item.capital?.[0] || 'N/A'}
          </p>
          <p className="card-text mb-1">
            <strong>Region:</strong> {item.region}
          </p>

        </div>
      </div>
    </div>
  );
};

export default Card;