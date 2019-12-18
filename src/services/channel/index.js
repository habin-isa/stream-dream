import axios from 'axios';
import config from '../../config.json';

/**
 * @param {string} url url for google api youtube request
 * @param {string} q search query
 */

const paqChannelId = 'UCvO6uJUVJQ6SrATfsWR5_aA';
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${paqChannelId}&key=${config.API_KEY}`;

export const getChannelData = async ({ params }) => {
    const response = await axios.get(url, {
        params
    });
    return response;
};
