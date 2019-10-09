import React from 'react';
import "./VideoPlayer.css"

const VideoPlayer = () => {

  return (
    <>
      {/* Cloudinary Video Player embed code */}
      <iframe
        src="https://player.cloudinary.com/embed/?cloud_name=iolamide&public_id=fifa-trailer&fluid=true&controls=true&show_jump_controls=true&floating_when_not_visible=right&source_types%5B0%5D=hls"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
        frameborder="0">
      </iframe>
    </>
  )
}

export default VideoPlayer;