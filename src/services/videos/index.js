import axios from "axios";
import config from "../../config.json";

/**
 * @param {string} url url for google api youtube request
 * @param {string} q search query
 */

const url = `https://www.googleapis.com/youtube/v3/search?key=${config.API_KEY}`;

export const getVideos = async ({ params }) => {
  const response = await axios.get(url, {
    params
  });
  console.log(response.data.items);
  return response;
};