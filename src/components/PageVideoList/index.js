import React, { useState, useCallback, useEffect } from 'react';

import * as S from './styles';
import LazyLoad from 'react-lazyload';
import Chart from '../Chart';
import VideoItem from '../VideoItem';
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
    if (videoData.length === 0) {
      loadVideos();
    }
  }, [loadVideos, videoData]);

  const renderedVideos = videoData.map(video => {
      return (
        <LazyLoad key={video.id.videoId} height={100} offset={[-100, 100]}>
          <VideoItem key={video.id.videoId} video={video} />
          <Chart video={video} />
        </LazyLoad>
      )
  });

  return (
    <S.Wrapper>
      {renderedVideos}
    </S.Wrapper>
  );
};

export default PageVideoList;
