import { Component } from 'react';
import { fetchPhotosByQuery } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    error: null,
    inputQuery: '',
    photos: [],
    currentPage: 1,
    isLoading: false,
    showLoadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { inputQuery, currentPage } = this.state;
    if (
      prevState.inputQuery !== inputQuery ||
      prevState.currentPage !== currentPage
    ) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await fetchPhotosByQuery(
          inputQuery,
          currentPage
        );
        this.setState(prevState => ({
          photos: [...prevState.photos, ...hits],
          showLoadMore: currentPage < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onButtonLoadMore = () => {
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1,
      };
    });
  };

  onSumbitSearch = searchWord => {
    this.setState({
      inputQuery: searchWord,
      photos: [],
      currentPage: 1,
      isLoading: false,
      showLoadMore: false
    });
  };

  render() {
    const { photos, showLoadMore, isLoading } = this.state;
    return (
      <>
        <Searchbar onSumbitSearch={this.onSumbitSearch} />
        {isLoading && <Loader />}
        <ImageGallery photos={photos} />
        {showLoadMore && <Button onButtonLoadMore={this.onButtonLoadMore} />}
      </>
    );
  }
}
