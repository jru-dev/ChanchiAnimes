import { useEffect } from 'react';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

const Home = () => {
  const { items, setItems } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');
        const json = await response.json();

        const data = json.data.slice(0, 6);

        const formatted = data.map((anime) => ({
          mal_id: anime.mal_id,
          title: anime.title,
          images: anime.images,
          episodes: anime.episodes,
          score: anime.score,
          type: anime.type
        }));

        setItems(formatted);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    if (items.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Animes chanchi</h1>
        <p className="lead">Pa lo chanchi otakus</p>
      </div>
      <CardList items={items} />
    </div>
  );
};

export default Home;
