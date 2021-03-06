import React from 'react';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';

import '../styles/modal-video.css';
import LogoYouTube from '../images/Logo_YouTube.png';
export default class MyVideo extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <h2>{this.props.t("writerVideo")}</h2>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.props.data}
          onClose={() => this.setState({ isOpen: false })}
        />
        <a onClick={this.openModal}>
          <img className="video-button" src={LogoYouTube}></img>
        </a>
      </div>
    );
  }
}

MyVideo.propTypes = {
  data: PropTypes.string,
  t: PropTypes.func,
};
