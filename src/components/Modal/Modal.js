import { Component } from 'react';
import PropTypes from 'prop-types';

import {ModalOverlay, ModalImg} from './Modal.styled' ;

export default class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClickCloseModal();
    }
  };

  onOverlayClick = event => {
    if (event.target.dataset.name === 'Overlay') {
      this.props.onClickCloseModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <ModalOverlay
        onClick={this.onOverlayClick}
        data-name="Overlay"
        
      >
        <ModalImg >
        
          <img src={largeImageURL} alt={tags} />
        </ModalImg>
      </ModalOverlay>
    );
  }
}

ModalWindow.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  onClickCloseModal: PropTypes.func,
};