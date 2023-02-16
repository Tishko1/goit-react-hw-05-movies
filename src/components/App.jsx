import { useState, useEffect } from 'react';
import { fetchPhotosByQuery } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export function App() {
  const [error, setError] = useState(null);
  const [inputQuery, setInputQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!inputQuery) return;

    const getPhotos = async () => {
      setIsLoading(true);
      try {
        const { hits, totalHits } = await fetchPhotosByQuery(
          inputQuery,
          currentPage
        );
        setPhotos(prevState => [...prevState, ...hits]);
        setShowLoadMore(currentPage < Math.ceil(totalHits / 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [inputQuery, currentPage]);

  const onButtonLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const onSumbitSearch = searchWord => {
    setInputQuery(searchWord);
    setIsLoading(false);
    setShowLoadMore(false);
    setCurrentPage(1);
    setPhotos([]);
  };

  return (
    <>
      <Searchbar onSumbitSearch={onSumbitSearch} />
      {isLoading && <Loader />}
      <ImageGallery photos={photos} />
      {showLoadMore && <Button onButtonLoadMore={onButtonLoadMore} />}
      {error && <p>Error{error}</p>}
    </>
  );
}
