import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosApi from '../../api/axiosApi';
import SearchBar from '../SearchBar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import Loader from '../Loader';
import { Container } from './App.styled';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    currentPage: 1,
    pageSize: 12,
    loading: false,
    error: null,
    showModal: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, searchQuery } = this.state;

    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      this.photosApiService();
    }
  }

  handleSearchQuery = searchQuery => {
    this.setState({
      photos: [],
      searchQuery,
      currentPage: 1,
    });
  };

  photosApiService = () => {
    const { searchQuery, currentPage, pageSize } = this.state;
    this.setState({ loading: true });

    axiosApi(searchQuery, currentPage, pageSize)
      .then(({ hits, totalHits }) => {
        if (currentPage === Math.ceil(totalHits / pageSize)) {
          toast("We're sorry, but you've reached the end of search results.", {
            autoClose: 3000,
          });
        }

        if (hits.length === 0) {
          return toast.error(
            'Sorry, there are no images matching your search query. Please try again.',
            {
              theme: 'dark',
              autoClose: 3000,
            },
          );
        }

        if (currentPage === 1) {
          toast.success(`Hooray! We found ${totalHits} images.`, {
            theme: 'colored',
            autoClose: 3000,
          });
        }

        this.setState(({ photos }) => ({
          photos: [...photos, ...hits],
          totalHits: totalHits,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleClickLoadMore = () => {
    this.setState(({ currentPage }) => ({
      currentPage: currentPage + 1,
      loading: true,
    }));
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeImageURL,
    }));
  };

  render() {
    const {
      photos,
      loading,
      showModal,
      largeImageURL,
      tags,
      totalHits,
      error,
    } = this.state;

    const loadMore =
      photos.length !== 0 && photos.length !== totalHits && !loading;

    return (
      <Container>
        <SearchBar onSubmit={this.handleSearchQuery} />
        {photos && <ImageGallery photos={photos} onClick={this.toggleModal} />}
        {loadMore && (
          <Button onClick={this.handleClickLoadMore}>Load more</Button>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        {error && toast.error(error.message)}
        {loading && <Loader />}
        <ToastContainer />
      </Container>
    );
  }
}

export default App;
