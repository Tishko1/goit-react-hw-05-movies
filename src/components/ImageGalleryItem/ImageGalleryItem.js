import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  GalleryItem,
    GalleryImage,
  } from './ImageGalleryItem.styled';
  import ModalWindow from '../Modal/Modal';
  
  class ImageGalleryItem extends Component {
    state = {
      isVisibleModal: false,
    };
  
    showNCloseModal = () => {
      this.setState(({ isVisibleModal }) => ({
        isVisibleModal: !isVisibleModal,
      }));
    };
  
    render() {
      const { id, webformatURL, largeImageURL, tags } = this.props;
      return (
        <GalleryItem key={id}>
          <GalleryImage
            
            onClick={this.showNCloseModal}
            src={webformatURL}
            alt={tags}
          />
          {this.state.isVisibleModal && (
            <ModalWindow
            
            onClickCloseModal={this.showNCloseModal}
            largeImageURL={largeImageURL}
              tags={tags}
            />
          )}
        </GalleryItem>
      );
    }
  }
  export default ImageGalleryItem;

  ImageGalleryItem.propTypes = {
        
        id: PropTypes.number,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
           };