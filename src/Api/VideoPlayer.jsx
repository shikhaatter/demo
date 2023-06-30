import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="container">
      <button className="btn btn-success" onClick={handlePlay}>
        Play
      </button>
      <button className="btn btn-danger" onClick={handlePause}>
        Pause
      </button>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/X7WXHhokylc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default VideoPlayer;
