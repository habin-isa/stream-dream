import styled from "styled-components";

export const VideoItem = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const VideoDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const VideoTitle = styled.div`
  font-weight: bold;
  padding: 20px;
`;

export const VideoDate = styled.div`
  padding-bottom: 20px;
  color: #fcba03;
  font-size: 12px;
  font-weight: bold;
  text-align: right;
`;