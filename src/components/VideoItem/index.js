import React from "react";
import YouTube from "react-youtube";

import * as S from "./styles";

const VideoItem = ({ video }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0
    }
  };
  return (
    <div>
      <S.VideoItem>
        <YouTube videoId={video.id.videoId} opts={opts} />
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </S.VideoItem>
    </div>
  );
};

export default VideoItem;
