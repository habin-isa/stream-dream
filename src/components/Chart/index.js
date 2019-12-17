import React, { useState, useEffect, useCallback } from 'react';

import { Line } from 'react-chartjs-2';
import moment from 'moment';
import * as S from './styles';
import { getVideos } from '../../services/videos';

const Chart = ({ video }) => {
    const [totalVideoData, setTotalVideoData] = useState([]);
    const [videoDates, setVideoDates] = useState([]);

    const paqChannelId = 'UCvO6uJUVJQ6SrATfsWR5_aA';

    const loadVideos = useCallback(async () => {
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
            setTotalVideoData(response.data.items);
        } catch (error) {
            console.log('error fetching videos');
        } finally {
            console.log('loadVideos has ran');
        }
    }, [totalVideoData]);

    useEffect(() => {
        if (totalVideoData.length === 0) {
            loadVideos();
        } else {
            totalVideoData.map((video) => {
                let date = video.snippet.publishedAt.slice(0, 10);
                return setVideoDates((videoDates) => [...videoDates, date]);
            });
            if (videoDates.length > 0) {
                lineData();
            }
        }
    }, [loadVideos, totalVideoData]);

    // console.log('videoDates', videoDates);

    const lineData = () => {
        videoDates.reduce(function(acc, date) {
            const yearWeek = moment(date).year() + '-' + moment(date).week();

            if (typeof acc[yearWeek] === 'undefined') {
                acc[yearWeek] = [];
            }

            acc[yearWeek].push(date);
            // console.log('puppi', acc);
            return acc;
        });

        // labels: [videoDates],
        // datasets: [
        //     {
        //         label: 'PAQ video uploads',
        //         fill: false,
        //         backgroundColor: 'blue',
        //         borderColor: 'blue',
        //         pointBorderColor: 'blue',
        //         pointRadius: 1,
        //         data: videoDates
        //     }
        // ]
    };

    return <S.Wrapper>{/* <Line data={lineData} /> */}</S.Wrapper>;
};

export default Chart;
