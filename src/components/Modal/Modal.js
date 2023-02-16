import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ModalOverlay, ModalImg } from './Modal.styled';

export function ModalWindow({ onClickCloseModal, largeImageURL, tags }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  // componentDidMount() {
  //   window.addEventListener('keydown', this.onKeyDown);
  // }

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onClickCloseModal();
    }
  };

  const onOverlayClick = event => {
    if (event.target.dataset.name === 'Overlay') {
      onClickCloseModal();
    }
  };

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onKeyDown);
  // }

  return (
    <ModalOverlay onClick={onOverlayClick} data-name="Overlay">
      <ModalImg>
        <img src={largeImageURL} alt={tags} />
      </ModalImg>
    </ModalOverlay>
  );
}

ModalWindow.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickCloseModal: PropTypes.func,
};
