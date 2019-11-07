import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos)
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.etag}
        onVideoSelect={onVideoSelect} />
    )
  })
  return (<div className='ui relaced divided list'>{renderedList}</div>)
}

export default VideoList;

// class VideoList extends React.Component {
//   render() {
//     return (
//       <div>{this.props.videos.length}</div>
//     )
//   }
// }

// export default VideoList;