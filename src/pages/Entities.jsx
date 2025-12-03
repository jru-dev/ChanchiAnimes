import { useState, useEffect } from 'react';
import CardList from '../components/CardList';

const Entities = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?page=${page}&limit=12`
        );
        const data = await response.json();

        setItems(data.data);
        setTotalPages(data.pagination.last_visible_page);
      } catch (error) {
        console.error('Error fetching anime:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (loading) {
    return (
      <div className="container py-5">
        <h2>Cargando...</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Todos los animes chanchi</h2>

      <CardList items={items} />

      <div className="d-flex justify-content-center gap-2 mt-4">
        <button
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </button>

        <span className="btn btn-outline-secondary disabled">
          Página {page} de {totalPages}
        </span>

        <button
          className="btn btn-primary"
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Entities;
