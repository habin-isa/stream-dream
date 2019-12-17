import React, { useState, useEffect } from 'react';

import * as S from './styles';

const Chart = ({ video }) => {
  const [videoDates, setVideoDates] = useState([]);

  const sortVideoDates = (video) => {
    console.log('ferrari', (video.snippet.publishedAt).slice(0, 10));
  }

  useEffect(() => {
    sortVideoDates();
  }, [videoDates])
  return (
      <S.Wrapper>Elliott</S.Wrapper>
  )
};

export default Chart;