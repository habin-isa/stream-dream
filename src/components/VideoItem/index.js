import React from 'react';
import YouTube from 'react-youtube';

import * as S from './styles';

const VideoItem = ({ video }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0
        }
    };

    return (
        <div>
            <S.VideoItem>
                <YouTube videoId={video.id.videoId} opts={opts} />
                <S.VideoDetails>
                    <S.VideoTitle>{video.snippet.title}</S.VideoTitle>
                    <S.VideoDate>{video.snippet.publishedAt.slice(0, 10)}</S.VideoDate>
                </S.VideoDetails>
            </S.VideoItem>
        </div>
    );
};

export default VideoItem;
