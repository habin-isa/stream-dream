import React from "react";
import * as S from "./styles";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div>
      <S.VideoItem>
        <S.VideoImg
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
          onClick={handleVideoSelect}
        />
        <div>{video.snippet.title}</div>
      </S.VideoItem>
    </div>
  );
};

export default VideoItem;
