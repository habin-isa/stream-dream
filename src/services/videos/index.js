import axios from 'axios';
import config from '../../config.json';

/**
 * @param {string} url url for google api youtube request
 * @param {string} q search query
 */

const url = `https://www.googleapis.com/youtube/v3/search?key=${config.API_KEY}`;

export const getVideos = async ({ params }) => {
    const response = await axios.get(url, {
        params
    });
    return response;
};

export const getVideoStats = async ({ params }) => {
    const statsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${params.videoId}&key=${config.API_KEY}`;

    const response = await axios.get(statsUrl, {
        params
    });
    return response;
};
