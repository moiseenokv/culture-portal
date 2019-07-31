import React from "react";
import PropTypes from 'prop-types'
import '../styles/video.css'

const Video = ({ url, title }) => (
    <div className="video">
      <iframe className= "video-frame"
        src={url}
        title={title}
        allow="autoplay; encrypted-media"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
    )
Video.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
}


  export default Video