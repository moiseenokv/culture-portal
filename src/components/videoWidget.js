import React from "react"
import PropTypes from "prop-types"
import ModalVideo from 'react-modal-video'
import '../styles/modal-video.min.css'
export default class MyVideo  extends React.Component {

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
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }
}

MyVideo.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}
