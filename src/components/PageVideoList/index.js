import React, { useState, useCallback, useEffect } from 'react';

import * as S from './styles';
import LazyLoad from 'react-lazyload';
import VideoItem from '../VideoItem';
import { getVideos } from '../../services/videos';

const PageVideoList = () => {
    const [videoData, setVideoData] = useState([]);

    const paqChannelId = 'UCvO6uJUVJQ6SrATfsWR5_aA';

    const loadVideosByDate = useCallback(async () => {
        try {
            const response = await getVideos({
                params: {
                    type: 'video',
                    part: 'snippet',
                    channelId: paqChannelId,
                    order: 'date',
                    maxResults: 20
                }
            });
            setVideoData(response.data.items);
        } catch (error) {
            console.log('error fetching videos');
        } finally {
            console.log('loadVideosByDate has ran');
        }
    }, []);

    const loadVideosByCount = useCallback(async () => {
        try {
            const response = await getVideos({
                params: {
                    type: 'video',
                    part: 'snippet',
                    channelId: paqChannelId,
                    order: 'viewCount',
                    maxResults: 20
                }
            });
            setVideoData(response.data.items);
        } catch (error) {
            console.log('error fetching videos');
        } finally {
            console.log('loadVideosByCount has ran');
        }
    }, []);

    useEffect(() => {
        if (videoData.length === 0) {
            loadVideosByDate();
        }
    }, [loadVideosByDate, videoData]);

    const renderedVideos = videoData.map((video) => {
        return (
            <LazyLoad key={video.id.videoId} height={100} offset={[-100, 100]}>
                <VideoItem key={video.id.videoId} video={video} />
            </LazyLoad>
        );
    });

    return (
        <S.Wrapper>
            <S.Menu>
                <S.DateBox onClick={loadVideosByDate}>Sort videos by date</S.DateBox>
                <S.CountBox onClick={loadVideosByCount}>Sort videos by view count</S.CountBox>
            </S.Menu>
            {renderedVideos}
        </S.Wrapper>
    );
};

export default PageVideoList;
