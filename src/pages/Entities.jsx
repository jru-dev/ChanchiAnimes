import { useState, useEffect } from 'react';
import CardList from '../components/CardList';

const Entities = () => {
  const [items, setItems] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flags,capital,region'
        );
        const data = await response.json();
        setAllCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allCountries.length > 0) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentItems = allCountries.slice(startIndex, endIndex);
      setItems(currentItems);
    }
  }, [page, allCountries]);

  const totalPages = Math.ceil(allCountries.length / itemsPerPage);

  if (loading) {
    return (
      <div className="container py-5">
        <h2>Cargando onadsoasd...</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Todos los paises son ({allCountries.length} en total)</h2>

      <CardList items={items} />

      <div className="d-flex justify-content-center gap-2 mt-4">
        <button
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Anterior anorris
        </button>
        <span className="btn btn-outline-secondary disabled">
          Pagína {page} de {totalPages}
        </span>
        <button
          className="btn btn-primary"
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
        >
            Siguiente UWUWUWUW
        </button>
      </div>
    </div>
  );
};

export default Entities;