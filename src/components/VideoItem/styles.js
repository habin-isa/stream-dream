import styled from "styled-components";

export const VideoItem = styled.div`
  display: flex !important;
  align-items: center !important;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const VideoImg = styled.img`
  max-width: 200px;
  max-height: 250px;
`;
