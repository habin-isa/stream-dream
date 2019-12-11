import React, { useState, useCallback, useEffect } from 'react';

import LazyLoad from 'react-lazyload';
import VideoItem from '../VideoItem';
import Loading from '../Loading';
import { getVideos } from '../../services/videos';

const PageVideoList = () => {
  const [videoData, setVideoData] = useState([]);

	const paqChannelId = 'UCvO6uJUVJQ6SrATfsWR5_aA';

  const loadVideos = useCallback(async () => {
    try {
      const response = await getVideos({
        params: {
          type: "video",
          part: "snippet",
					channelId: paqChannelId,
					order: 'date',
          maxResults: 20
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
    return (
      <LazyLoad key={video.id.videoId} placeholder={<Loading/>} height={100} offset={[-100, 100]}>
        <VideoItem key={video.id.videoId} video={video} />
      </LazyLoad>
		)
  });

  return (
    <div>
      {renderedVideos}
    </div>
  );
};

export default PageVideoList;
