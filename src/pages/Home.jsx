import { useEffect } from 'react';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

const Home = () => {
  const { items, setItems } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags,capital,region'
      );
      const data = await response.json();
      setItems(data.slice(0, 6));
    };

    if (items.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Paisess Gaa</h1>
        <p className="lead">Somos consumidores (de enpoints xd)</p>
      </div>
      <CardList items={items} />
    </div>
  );
};

export default Home;