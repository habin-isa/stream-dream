import React, { useState, useEffect, useCallback } from 'react';

import { HorizontalBar } from 'react-chartjs-2';
import * as S from './styles';
import { getChannelData } from '../../services/channel';

const Chart = () => {
    const [chartData, setChartData] = useState([]);
    const [videoCount, setVideoCount] = useState();

    const loadChannelData = useCallback(async () => {
        try {
            const response = await getChannelData({
                params: {
                    part: 'snippet'
                }
            });
            let statistics = response.data.items[0].statistics;
            setChartData((chartData) => [...chartData, statistics.subscriberCount]);
            setChartData((chartData) => [...chartData, statistics.viewCount]);
            setVideoCount(statistics.videoCount);
        } catch (error) {
            console.log('error fetching channel data');
        }
    }, []);

    const data = {
        labels: ['Subscriber count', 'View count'],
        datasets: [
            {
                label: 'PAQ channel statistics',
                backgroundColor: '#fcba03',
                borderColor: '#fcba03;',
                borderWidth: 1,
                hoverBackgroundColor: '#333',
                hoverBorderColor: '#fcba03',
                data: chartData
            }
        ]
    };

    const getDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        return mm + '-' + dd + '-' + yyyy;
    };

    useEffect(() => {
        loadChannelData();
    }, []);

    return (
        <S.Wrapper>
            <S.ChartContainer>
                <HorizontalBar data={data} />
            </S.ChartContainer>
            <S.Container>
                PAQ Channel video count: {videoCount}
                <S.Subtitle>As of {getDate()}</S.Subtitle>
            </S.Container>
        </S.Wrapper>
    );
};

export default Chart;
