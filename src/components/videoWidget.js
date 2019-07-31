import React from "react"
import Video from "../components/video"
import PropTypes from "prop-types"
// import Title from "antd/lib/typography/Title";

const MyVideo = ({url, title}) => (
    <>
        <h1>{title}</h1>
        <Video
            url = {url}
            title= {title}      
        />
    </>
)
export default MyVideo

MyVideo.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}



// export React from 'react';



// const Video = ({ videoSrcURL, videoTitle, ...props }) => (
//     <div className="video">
//       <iframe
//         src={videoSrcURL}
//         title={videoTitle}
//         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         frameBorder="0"
//         webkitallowfullscreen="true"
//         mozallowfullscreen="true"
//         allowFullScreen
//       />
//     </div>
//   )