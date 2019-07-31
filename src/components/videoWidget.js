import React from 'react'
import ModalVideo from 'react-modal-video'
import PropTypes from "prop-types"
import '../styles/modal-video.scss'
import YouTube from '../images/Logo_YouTube.png'

class MyVideo extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.url} onClose={() => this.setState({isOpen: false})} />
        <a onClick={this.openModal}>
          <img src={YouTube} className="youtube-logo"/>
          </a>
      </div>
    )
  }
}

export default MyVideo

MyVideo.propTypes = {
    url: PropTypes.string
}
