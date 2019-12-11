import React, { useState, useCallback, useEffect } from "react";

import VideoItem from "../VideoItem";
import { getVideos } from "../../services/videos";

const PageVideoList = () => {
  const [videoData, setVideoData] = useState([]);

  const loadVideos = useCallback(async () => {
    try {
      const response = await getVideos({
        params: {
          type: "video",
          part: "snippet",
          q: "PAQ"
        }
      });
      setVideoData(response.data.items);
      console.log(videoData);
    } catch (error) {
      console.log("error fetching videos");
    } finally {
      console.log("loadVideos has ran");
    }
  }, [videoData]);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  const renderedVideos = videoData.map(video => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return (
    <div>
      FERRARI
      {renderedVideos}
    </div>
  );
};

export default PageVideoList;
