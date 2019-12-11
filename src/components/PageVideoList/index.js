import React, { useState, useCallback } from "react";
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
      console.log("ran");
    }
  }, [videoData]);

  return (
    <div>
      FERRARI
      <button onClick={loadVideos}>LOAD</button>
    </div>
  );
};

export default PageVideoList;
