import React, { useState, useEffect, useCallback } from 'react';

import './styles.css';
import * as S from './styles';
import { getVideoStats } from '../../services/videos';

const VideoItem = ({ video }) => {
    const [videoStats, setVideoStats] = useState([]);

    const loadVideoStats = useCallback(async () => {
        try {
            const response = await getVideoStats({
                params: {
                    videoId: video.id.videoId
                }
            });
            setVideoStats(response.data.items[0].statistics);
        } catch (error) {
            console.log('error fetching videos');
        } finally {
            console.log('loadVideosByDate has ran');
        }
    }, []);

    useEffect(() => {
        if (videoStats.length === 0) {
            loadVideoStats();
        }
    }, [videoStats]);

    return (
        <div>
            <S.VideoItem>
                <div className="video-container">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="video"
                    ></iframe>
                </div>
                <S.VideoDetails>
                    <S.VideoTitle>{video.snippet.title}</S.VideoTitle>
                    <S.VideoDate>{video.snippet.publishedAt.slice(0, 10)}</S.VideoDate>
                    <S.VideoStats>
                        Views: {videoStats.viewCount}, Likes: {videoStats.likeCount}, Dislikes:{' '}
                        {videoStats.dislikeCount}, Comments: {videoStats.commentCount}
                    </S.VideoStats>
                </S.VideoDetails>
            </S.VideoItem>
        </div>
    );
};

export default VideoItem;
