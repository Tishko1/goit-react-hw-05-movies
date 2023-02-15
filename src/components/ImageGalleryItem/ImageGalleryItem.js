import { useState } from 'react';
import PropTypes from 'prop-types';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import ModalWindow from '../Modal/Modal';

function  ImageGalleryItem ({ id, webformatURL, largeImageURL, tags }) {
  const [isVisibleModal, seIsVisibleModal] = useState(false);
  

  const showNCloseModal = () => {
    seIsVisibleModal( isVisibleModal  => !isVisibleModal );
  };

  
    return (
      <GalleryItem key={id}>
        <GalleryImage
          onClick={showNCloseModal}
          src={webformatURL}
          alt={tags}
        />
        {isVisibleModal && (
          <ModalWindow
            onClickCloseModal={showNCloseModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </GalleryItem>
    );
  
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
